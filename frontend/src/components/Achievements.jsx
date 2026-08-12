import "./Achievements.css";

function Achievements() {
  const achievements = [
    {
      icon: "💻",
      title: "200+ DSA Problems Solved",
      category: "Problem Solving",
      description:
        "Solved 200+ Data Structures and Algorithms problems across coding platforms, strengthening problem-solving and algorithmic thinking skills.",
    },

    {
      icon: "🏀",
      title: "Parakram 2024",
      category: "Sports",
      description:
        "Participated in the Parakram 2024 basketball event and contributed as a member of the college basketball team.",
    },

    {
      icon: "🤝",
      title: "NSS Volunteer",
      category: "Community",
      description:
        "Volunteered with the National Service Scheme (NSS), contributing to community and social activities.",
    },
  ];

  return (
    <section className="achievements" id="achievements">
      <div className="section-heading">
        <p>Beyond Academics</p>
        <h2>Achievements & Activities</h2>
      </div>

      <div className="achievements-container">
        {achievements.map((achievement) => (
          <div
            className="achievement-card"
            key={achievement.title}
          >
            <div className="achievement-icon">
              {achievement.icon}
            </div>

            <div className="achievement-content">
              <span className="achievement-category">
                {achievement.category}
              </span>

              <h3>{achievement.title}</h3>

              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;