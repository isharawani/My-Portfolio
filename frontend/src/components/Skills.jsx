import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript"],
    },

    {
      category: "Frontend",
      skills: ["HTML", "CSS", "React"],
    },

    {
      category: "Core",
      skills: ["Data Structures & Algorithms", "OOP"],
    },

    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },

    {
      category: "Currently Learning",
      skills: ["Artificial Intelligence", "Machine Learning"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-heading">
        <p>What I Work With</p>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-container">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.category}>

            <h3>{category.category}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;