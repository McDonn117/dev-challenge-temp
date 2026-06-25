/* global React, ReactDOM */
// Composes the full single-scroll homepage.
function App() {
  const S = window.STM;
  React.useEffect(() => {
    // Re-render any lucide <i> placeholders if some slipped through (Icon uses
    // window.lucide directly, so this is just a safety net).
    if (window.lucide && window.lucide.createIcons) {
      try { window.lucide.createIcons(); } catch (e) {}
    }
  }, []);
  return (
    <React.Fragment>
      <S.Header />
      <main>
        <S.Hero />
        <S.CtaStrip />
        <S.ServicesPanel />
        <S.StatsPanel />
        <S.AboutPanel />
        <S.UspPanel />
        <S.SafetyPanel />
        <S.TestimonialsPanel />
        <S.CapabilityPanel />
        <S.IndustriesPanel />
        <S.FaqPanel />
        <S.LocationsPanel />
        <S.ClosingCtaPanel />
      </main>
      <S.FooterPanel />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
