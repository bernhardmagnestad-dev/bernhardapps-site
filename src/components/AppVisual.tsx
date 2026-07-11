export function AppVisual() {
  return (
    <div
      className="app-visual"
      role="img"
      aria-label="Stylized preview of a mobile app dashboard with session cards and planning tools"
    >
      <div className="phone phone-back">
        <div className="screen-grid">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="phone phone-front">
        <div className="phone-speaker" />
        <div className="screen-title" />
        <div className="screen-card wide" />
        <div className="screen-card" />
        <div className="screen-card short" />
        <div className="screen-tabs">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
