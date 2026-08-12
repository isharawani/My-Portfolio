import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Python Developer Intern",
      organization: "Fobes Skill iTech Pvt Ltd",
      type: "Internship",
      duration: "1 Month",
      status: "Selected",
      description:
        "Selected for a Python Developer Internship opportunity focused on developing practical Python programming and software development skills.",
      technologies: ["Python", "Programming", "Software Development"],
    },

    {
      role: "Python Development Intern",
      organization: "She Can Foundation",
      type: "Internship",
      duration: "2 Weeks",
      status: "Selected",
      description:
        "Selected for a Python Development Internship involving Django development, REST APIs, Flask microservices and integration of machine learning concepts.",
      technologies: [
        "Python",
        "Django",
        "REST API",
        "Flask",
        "Machine Learning",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="section-heading">
        <p>My Professional Journey</p>
        <h2>Experience</h2>
      </div>

      <div className="experience-container">
        {experiences.map((experience) => (
          <div className="experience-card" key={experience.organization}>

            <div className="experience-top">
              <div>
                <span className="experience-type">
                  {experience.type}
                </span>

                <h3>{experience.role}</h3>

                <h4>{experience.organization}</h4>
              </div>

              <span className="experience-status">
                {experience.status}
              </span>
            </div>

            <p className="experience-duration">
              {experience.duration}
            </p>

            <p className="experience-description">
              {experience.description}
            </p>

            <div className="experience-technologies">
              {experience.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;