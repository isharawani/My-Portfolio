import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript"],
    },

    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React"],
    },

    {
      title: "Computer Science",
      skills: ["Data Structures & Algorithms", "OOP"],
    },

    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },

    {
      title: "Artificial Intelligence",
      skills: ["Artificial Intelligence", "Machine Learning"],
    },
  ];

  return (
    <section className="skills" id="skills">

      <div className="skills-header">
        <p>What I Work With</p>

        <h2>Technical Skills</h2>

        <span>
          Technologies and concepts I use while building projects
          and developing my software engineering skills.
        </span>
      </div>

      <div className="skills-container">

        <div className="skills-grid">

          {skillCategories.map((category) => (
            <div
              className="skill-category"
              key={category.title}
            >
              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span
                    className="skill-item"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;