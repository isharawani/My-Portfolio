import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Python Developer Intern",
      company: "Fobes Skill iTech Pvt. Ltd.",
      duration: "2026",
      type: "Internship",
      description:
        "Worked on Python development and strengthened practical programming skills through project-based learning and software development tasks.",
      skills: ["Python", "Programming", "Problem Solving"],
    },

    {
      role: "Full Stack Web Developer Intern",
      company: "Skill Nexis",
      duration: "2026",
      type: "Internship",
      description:
        "Worked on full stack web development concepts and gained practical exposure to frontend and backend development.",
      skills: ["HTML", "CSS", "JavaScript", "Web Development"],
    },

    {
      role: "Python Development Intern",
      company: "She Can Foundation",
      duration: "2026",
      type: "Internship",
      description:
        "Gained practical exposure to Python-based web development, Django, REST APIs, and backend development through internship projects.",
      skills: ["Python", "Django", "REST API", "Backend Development"],
    },
  ];

  return (
    <section className="experience" id="experience">

      <div className="experience-header">
        <p>My Professional Journey</p>

        <h2>Experience</h2>

        <span>
          Internship experiences and practical opportunities that
          have helped me develop my technical and professional skills.
        </span>
      </div>

      <div className="experience-container">

        {experiences.map((experience, index) => (
          <div
            className="experience-item"
            key={`${experience.company}-${experience.role}`}
          >

            <div className="experience-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="experience-card">

              <div className="experience-top">

                <div>
                  <span className="experience-type">
                    {experience.type}
                  </span>

                  <h3>{experience.role}</h3>

                  <h4>{experience.company}</h4>
                </div>

                <span className="experience-duration">
                  {experience.duration}
                </span>

              </div>

              <p className="experience-description">
                {experience.description}
              </p>

              <div className="experience-skills">
                {experience.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Experience;