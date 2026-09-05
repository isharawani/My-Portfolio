
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Full Stack Portfolio",
      description:
        "A responsive personal portfolio website built to showcase my skills, projects, education, certifications, achievements, and professional profile.",
      technologies: ["React", "HTML-CSS", "Django", "Python"],
      github: "https://github.com/isharawani/My-Portfolio",
      live: "#",
    },

    {
      title: "DSA in Python",
      description:
        "A collection of Data Structures and Algorithms implementations and problem-solving solutions using Python, covering important interview patterns and coding problems.",
      technologies: ["Python", "DSA", "Problem Solving"],
      github: "https://github.com/isharawani/DSA_IN_PYTHON",
      live: "#",
    },

    {
      title: "Task Management Application (Working-on)",
      description:
        "full-stack task management web application where users can securely register and log in, create and manage tasks, mark them as completed, filter tasks, and upload images.",
      technologies: ["HTML", "CSS", "JavaScript", "MERN Stack", "REST API", "JWT"],
      github: "https://github.com/isharawani/SkillNexis-PROJECTS",
      live: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <p>What I've Built</p>

        <h2>Projects</h2>

        <span>
          A selection of projects that reflect my development skills,
          problem-solving abilities, and continuous learning.
        </span>
      </div>

      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button primary"
                  >
                    GitHub ↗
                  </a>

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button secondary"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
