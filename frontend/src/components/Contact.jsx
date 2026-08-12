import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/contact/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus(data.message);

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);

      setStatus(
        "Unable to connect to the server. Please try again."
      );
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="section-heading">
        <p>Let's Connect</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's work together</h3>

          <p>
            I'm open to internship opportunities, software development
            roles, and interesting projects where I can learn, contribute,
            and grow as a developer.
          </p>

          <div className="contact-links">

            <a href="mailto:YOUR_EMAIL@gmail.com">
              <span>📧</span>

              <div>
                <strong>Email</strong>
                <p>YOUR_EMAIL@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              <span>💻</span>

              <div>
                <strong>GitHub</strong>
                <p>GitHub Profile</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR_USERNAME/"
              target="_blank"
              rel="noreferrer"
            >
              <span>🔗</span>

              <div>
                <strong>LinkedIn</strong>
                <p>LinkedIn Profile</p>
              </div>
            </a>

          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label htmlFor="name">
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button type="submit">
            Send Message
          </button>

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}

        </form>

      </div>
    </section>
  );
}

export default Contact;