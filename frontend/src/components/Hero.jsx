
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background decorations */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <div className="hero-badge">
            <span className="status-dot"></span>
            Available for Opportunities
          </div>

          <p className="hero-intro">
            Hello, I'm
          </p>

          <h1>
            Isha <span>Kumari</span>
          </h1>

          <h2>
            Information Technology Student
            <br />
            <span>& Developer</span>
          </h2>

          <p className="hero-description">
            I build responsive web applications and enjoy solving
            challenging problems using Python, React and modern
            web technologies. I'm also exploring Artificial
            Intelligence and Machine Learning.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              View My Work
              <span>↗</span>
            </a>

            <a
              href="/resume/resume.pdf"
              target="_blank"
              className="secondary-button"
              rel="noopener noreferrer"
            >
              View Resume
              <span>↗</span>
            </a>

          </div>

          <div className="hero-social-proof">

            <div>
              <strong>200+</strong>
              <span>DSA Problems</span>
            </div>

            <div className="hero-divider"></div>

            <div>
              <strong>3+</strong>
              <span>Projects</span>
            </div>

            <div className="hero-divider"></div>

            <div>
              <strong>2027</strong>
              <span>Graduation</span>
            </div>

          </div>

        </div>

        {/* Right Visual */}
        <div className="hero-visual">

          <div className="profile-card">

            <div className="profile-card-top">
              <span className="window-dot purple"></span>
              <span className="window-dot cyan"></span>
              <span className="window-dot pink"></span>
            </div>

           <div className="profile-circle">
            <img src="/images/profile.jpg" alt="Isha Kumari" />
            </div>

            <h3>Isha Kumari</h3>

            <p className="profile-role">
              Full Stack Developer
            </p>

            <div className="profile-line"></div>

            <div className="profile-skills">
              <span>Python</span>
              <span>React</span>
              <span>Django</span>
              <span>JavaScript</span>
            </div>

            <div className="profile-code">
              <span className="code-purple">const</span>{" "}
              developer = {"{"}
              <br />

              <span className="code-indent">
                passion: <span className="code-cyan">"building"</span>,
              </span>

              <br />

              <span className="code-indent">
                learning: <span className="code-cyan">"AI/ML"</span>,
              </span>

              <br />

              <span className="code-indent">
                problemSolving: <span className="code-cyan">true</span>
              </span>

              <br />

              {"}"};
            </div>

          </div>

          <div className="floating-card floating-card-one">
            <span>🐍</span>
            Python
          </div>

          <div className="floating-card floating-card-two">
            <span>⚛</span>
            React
          </div>

        </div>

      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;
