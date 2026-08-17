import "./Education.css";

function Education() {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Bengal College of Engineering and Technology",
      duration: "2023 – 2027",
      result: "CGPA: 7.8",
      location: "Durgapur, West Bengal",
    },
    {
      degree: "Higher Secondary",
      institution: "Tata DAV School",
      duration: "2021 – 2022",
      result: "Percentage: 73.8%",
      location: "Sijua-Bhelatand, Jharkhand",
    },
    {
      degree: "Secondary Education",
      institution: "Doon Public School",
      duration: "2019 – 2020",
      result: "Percentage: 83.6%",
      location: "Koylanagar-Dhanbad, Jharkhand",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="section-heading">
        <p>My Academic Background</p>
        <h2>Education</h2>
      </div>

      <div className="education-container">
        {education.map((item, index) => (
          <div className="education-item" key={item.degree}>

            <div className="education-number">
              {index + 1}
            </div>

            <div className="education-content">

              <div className="education-header">
                <div>
                  <h3>{item.degree}</h3>
                  <h4>{item.institution}</h4>
                </div>

                <span className="education-duration">
                  {item.duration}
                </span>
              </div>

              <div className="education-result">
                {item.result}
              </div>

              {item.location && (
                <p className="education-location">
                  📍 {item.location}
                </p>
              )}

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;