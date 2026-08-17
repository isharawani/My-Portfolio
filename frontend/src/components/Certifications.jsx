import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      name: "Deloitte Data Analytics Job Simulation",
      organization: "Forage",
      date: "July 2025",
      description:
        "Completed practical tasks in Data Analysis and Forensic Technology.",
      certificateFile: "/certificates/DELOITTE CERTIFICATE.pdf",
    },

    {
      name: "AICTE APPROVED-PYTHON DEVELOPER INTER",
      organization: "She Can",
      date: "Aug 2026",
      description:
        "Completed python in-depth  to learn solving problem, making project, build technical skills. " ,
      certificateFile: "/certificates/Isha_Kumari_Hired_Certificate.pdf",
    },


    {
      name: "AI-SKILL FEST 2026",
      organization: "Microsoft",
      date: "june 2026",
      description:
        "Completed an in-depth AI ETHICS , AI APPLICATIONS, BUILD AUTOMATION, AI TOOL ADOPTION, RESPONSIBLE AI, AI LITERACY. ",
      certificateFile: "/certificates/ai-skills-fest-2026.png",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="section-heading">
        <p>Learning & Credentials</p>
        <h2>Certifications</h2>
      </div>

      <div className="certifications-container">
        {certifications.map((certificate) => (
          <div
            className="certificate-card"
            key={certificate.name}
          >
            <div className="certificate-icon">
              🏆
            </div>

            <div className="certificate-content">
              <h3>{certificate.name}</h3>

              <p className="certificate-organization">
                {certificate.organization}
              </p>

              <p className="certificate-date">
                {certificate.date}
              </p>

              <p className="certificate-description">
                {certificate.description}
              </p>

              <div className="certificate-actions">
                <a
                  href={certificate.certificateFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-button"
                >
                  View Certificate
                </a>

                <a
                  href={certificate.certificateFile}
                  download
                  className="certificate-download"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;