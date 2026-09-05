import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Web Developer Intern",
      company: "Skill Nexis",
      duration: "Working...",
      type: "Internship",
      description:
        "Worked on full stack web development concepts and gained practical exposure to frontend and backend development.",
      skills: ["HTML", "CSS", "JavaScript", "Web Development"],
    },
    {
      role: "Python Developer ",
      company: "GeeksforGeeks",
      duration: "2025-2026",
      type: "Training",
      description:
        "Learned Python programming, OOP, data structures, algorithms, and problem-solving.",
      skills: ["Python", "Programming", "Problem Solving"],
    },

    {
      role: "Python Development Intern",
      company: "She Can Foundation",
      duration: "2026",
      type: "Selected",
      description: "Selected for a Python Development Internship.",
      skills: ["Python","Django","object-oriented programming (OOP)"],
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