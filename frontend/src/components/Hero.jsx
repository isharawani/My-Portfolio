import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>

        <h1>Isha Kumari</h1>

        <h2>Information Technology Student & Developer</h2>

        <p className="hero-description">
          I'm passionate about Python, React, web development and
          problem solving. I enjoy building responsive web applications
          and exploring Artificial Intelligence and Machine Learning.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Projects
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;