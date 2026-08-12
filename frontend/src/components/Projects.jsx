import "./Projects.css";

function Projects() {
  const projects = [
    
    {
      title: "Personal Portfolio Website",

      description:
        "A responsive personal portfolio website designed to showcase my projects, technical skills and achievements across desktop and mobile devices.",

      technologies: ["React", "HTML", "CSS"],

      github: "#",
      live: "#",
    },
    {
      title: "AI Resume Analyzer",

      description:
        "A web application that analyzes resumes and provides ATS-friendly improvement suggestions. It uses resume parsing and keyword matching to help evaluate resumes.",

      technologies: ["Python", "React"],

      github: "#",
      live: "#",
    },

  ];

  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <p>What I've Built</p>
        <h2>My Projects</h2>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technologies">
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
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;