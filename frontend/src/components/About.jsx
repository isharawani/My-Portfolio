import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-content">
          <p className="section-subtitle">
            Get To Know Me
          </p>

          <h2>About Me</h2>

          <p>
            I'm Isha Kumari, an Information Technology student at
            Bengal College of Engineering and Technology, currently
            pursuing my B.Tech degree.
          </p>

          <p>
            I have a strong interest in software development and
            enjoy building responsive web applications using Python,
            JavaScript, React, HTML and CSS.
          </p>

          <p>
            Alongside web development, I'm strengthening my
            Data Structures and Algorithms and problem-solving skills
            while exploring Artificial Intelligence and Machine Learning.
          </p>

          <div className="about-info">

            <div>
              <strong>Degree</strong>
              <span>B.Tech in Information Technology</span>
            </div>

            <div>
              <strong>College</strong>
              <span>Bengal College of Engineering and Technology</span>
            </div>

            <div>
              <strong>CGPA</strong>
              <span>7.8</span>
            </div>

            <div>
              <strong>Focus</strong>
              <span>Web Development & AI/ML</span>
            </div>

          </div>

          <a
            href="/resume/resume.pdf"
            className="resume-button"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;