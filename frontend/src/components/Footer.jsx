import "./Footer.css";

function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/isharawani",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.12c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 5.9c.97 0 1.94.13 2.85.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18v3.23c0 .3.2.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
          />
        </svg>
      ),
    },

    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/isha-kumari-3bb37040b",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
          />
        </svg>
      ),
    },

    {
      name: "LeetCode",
      url: "https://leetcode.com/u/IshaKumari0311/",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M17.14 15.12a1.25 1.25 0 0 0 0-2.5h-7.8a1.25 1.25 0 0 0 0 2.5h7.8ZM22.14 12a1.25 1.25 0 0 0-2.5 0c0 4.1-3.34 7.44-7.44 7.44a7.45 7.45 0 0 1-6.13-3.21l4.37-5.2a1.25 1.25 0 0 0-1.91-1.61l-4.5 5.35A9.94 9.94 0 0 0 12.2 21.94c5.48 0 9.94-4.46 9.94-9.94ZM7.6 5.47a7.44 7.44 0 0 1 4.6-1.6c.68 0 1.35.09 1.99.27a1.25 1.25 0 1 0 .68-2.4A9.95 9.95 0 0 0 12.2 1.37a9.94 9.94 0 0 0-6.13 2.11l-2.1-2.1a1.25 1.25 0 0 0-1.77 1.77l2.1 2.1a9.94 9.94 0 0 0 0 13.9 1.25 1.25 0 0 0 1.77-1.77 7.45 7.45 0 0 1 1.53-11.91Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Isha<span>.</span></h2>
          <p>
            Building, learning and growing one project at a time.
          </p>
        </div>

        <div className="footer-socials">

          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              aria-label={social.name}
            >
              <div className="social-icon">
                {social.icon}
              </div>

              <div className="social-info">
                <span>Connect on</span>
                <strong>{social.name}</strong>
              </div>

              <span className="social-arrow">↗</span>
            </a>
          ))}

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Isha Kumari. All rights reserved.
        </p>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;