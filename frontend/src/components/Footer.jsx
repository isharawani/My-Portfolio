import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Isha Kumari</h3>

          <p>
            Information Technology Student & Developer
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Isha Kumari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;