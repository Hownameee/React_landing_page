export default function FeatureBlock({ src, title, text }) {
  return (
    <div className="feature-container">
      <div className="feature-block">
        <img src={src} alt="fire" />
        <div className="feature-desc">
          <h2 className="feature-title">{title}</h2>
          <p className="feature-text-content">{text}</p>
        </div>
      </div>
    </div>
  );
}
