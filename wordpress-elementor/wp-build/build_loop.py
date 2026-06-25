import os,base64,json,urllib.request,urllib.error,urllib.parse,re
SITE=os.environ["STM_SITE"].rstrip("/"); U=os.environ["STM_USER"]; P=os.environ["STM_PW"].replace(" ","")
AUTH="Basic "+base64.b64encode(f"{U}:{P}".encode()).decode()
UA="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"
def call(method,route,data=None,override=None):
    r,_,qs=route.partition("?"); url=f"{SITE}/?rest_route={r}"+(f"&{qs}" if qs else "")
    h={"Authorization":AUTH,"User-Agent":UA}; body=None
    if override:h["X-HTTP-Method-Override"]=override
    if data is not None: body=json.dumps(data).encode(); h["Content-Type"]="application/json"
    try:
        with urllib.request.urlopen(urllib.request.Request(url,data=body,headers=h,method=method),timeout=90) as resp: return resp.status,json.loads(resp.read().decode())
    except urllib.error.HTTPError as e: return e.code,e.read().decode()[:250]
def fetch(url):
    with urllib.request.urlopen(urllib.request.Request(url,headers={"User-Agent":UA}),timeout=90) as r: return r.read().decode()
def tag(name,settings,_id): return f'[elementor-tag id="{_id}" name="{name}" settings="{urllib.parse.quote(json.dumps(settings))}"]'
# stm-mark url
_,media=call("GET","/wp/v2/media?per_page=100&search=stm-mark")
mark=next((m["source_url"] for m in media if "stm-mark" in m["source_url"]), "")
print("stm-mark:",mark)
# SERVICE loop item: container.svc-tile(link=permalink) > [Image.svc-tile__bg(dyn), html logo, Heading.svc-tile__title(dyn), html plus]
item=[{"id":"svtile01","elType":"container","settings":{
        "_css_classes":"svc-tile","content_width":"full","flex_gap":{"size":0,"unit":"px"},
        "link":{"url":"","is_external":"","nofollow":""},"__dynamic__":{"link":tag("post-url",{},"pu")}},
      "elements":[
   {"id":"svbg0001","elType":"widget","widgetType":"image","settings":{"_css_classes":"svc-tile__bg","__dynamic__":{"image":tag("acf-image",{"key":"field_service_image"},"im")}}},
   {"id":"svlogo01","elType":"widget","widgetType":"html","settings":{"html":f'<span class="svc-tile__logo"><img src="{mark}" alt=""></span>'}},
   {"id":"svtit001","elType":"widget","widgetType":"heading","settings":{"_css_classes":"svc-tile__title","header_size":"h3","__dynamic__":{"title":tag("post-title",{},"pt")}}},
   {"id":"svplus01","elType":"widget","widgetType":"html","settings":{"html":'<span class="svc-tile__plus"><i data-lucide="plus"></i></span>'}},
 ]}]
st,res=call("POST","/wp/v2/elementor_library",{"title":"STM Loop — Service Tile","status":"publish","meta":{"_elementor_data":json.dumps(item),"_elementor_edit_mode":"builder","_elementor_template_type":"loop-item","_elementor_version":"4.1.4"}})
tid=res["id"]; print("created Service loop-item:",tid)
# verify render
grid={"id":"lg00000","elType":"widget","widgetType":"loop-grid","settings":{"template_id":tid,"posts_per_page":12,"post_query_post_type":"service","_skin":"post","_css_classes":"svc-grid"}}
data=[{"id":"c000001","elType":"container","elements":[grid]}]
_,pr=call("POST","/wp/v2/pages",{"title":"ZZ Verify Services","status":"publish","meta":{"_elementor_data":json.dumps(data),"_elementor_edit_mode":"builder","_elementor_version":"4.1.4","_elementor_template_type":"wp-page"}})
html=fetch(pr["link"])
titles=[re.sub(r'<[^>]+>','',t).strip() for t in re.findall(r'svc-tile__title[^>]*>(?:<[^>]+>)*\s*([^<]+)', html)]
titles=[t for t in titles if t]
imgs=len(re.findall(r'svc-tile__bg[\s\S]{0,200}?<img[^>]*src="https', html))
hrefs=re.findall(r'class="[^"]*svc-tile[^"]*"[^>]*href="([^"]+)"|href="([^"]+)"[^>]*class="[^"]*svc-tile', html)
print("\n-- VERIFY Services loop --")
print("  service titles rendered:",len(titles)); print("   ",titles)
print("  svc-tile__bg images:",imgs)
print("  classes present: svc-grid",("svc-grid" in html)," svc-tile",("svc-tile" in html)," svc-tile__title",("svc-tile__title" in html))
# sample permalink
mp=re.search(r'(https://[^"]*?/service/[^"]+)"',html)
print("  sample card permalink:", mp.group(1) if mp else "(none)")
call("POST",f"/wp/v2/pages/{pr['id']}?force=true",override="DELETE")
print("\n(verification page cleaned; loop-item KEPT as #%d)"%tid)
open('/tmp/service_loop_id.txt','w').write(str(tid))
