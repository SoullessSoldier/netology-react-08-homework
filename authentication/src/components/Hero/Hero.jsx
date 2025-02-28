import "./hero.css";

const Hero = () => {
    return (
      <div className="hero">
        <h1 className="hero-title">Neto Social</h1>
        <p className="hero-subtitle">Facebook* and VK killer</p>
        <small className="hero-subtitle-disclaimer">
          *Деятельность Meta (соцсети Facebook и Instagram) признана
          экстремистской и запрещена в России
        </small>
      </div>
    );
}

export default Hero;