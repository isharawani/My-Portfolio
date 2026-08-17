import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Isha
      </a>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#education">Education</a>
        </li>

        <li>
          <a href="#certifications">Certifications</a>
        </li>

        <li>
          <a href="#achievements">Achievements</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;