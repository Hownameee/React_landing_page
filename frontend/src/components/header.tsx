import logo from './img/logo.png'

export default function Header() {
  return (
    <div className="header">
        <div className="header-logo">
          <img src={logo} alt="Original Trombones" />
        </div>
        <div className="header-nav">
          <a className="header-button" href="#features">Features</a>
          <a className="header-button" href="#how-it-works">How It Works</a>
          <a className="header-button" href="#pricing">Pricing</a>
        </div>
      </div>
  );
}
