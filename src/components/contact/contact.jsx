import "./Contact.css";

export default function Contact() {
  return (
    <footer id="contact">
      <div className="container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-desc">
          I’d love to connect — feel free to reach out!
        </p>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "This form is just a placeholder. Connect via social links or email!"
            );
          }}
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            className="contact-input"
          />
          <textarea
            placeholder="Your message"
            required
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>

        <div className="social-links">
          <a
            href="https://facebook.com/mohammadabed.frmuly"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://instagram.com/mohammadabid8980"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-abid-formuli-b4898a2a0/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/MohammadAbid1234"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>

        <p className="copyright">
          &copy;
          {/* {new Date().getFullYear()} */}
          2024 Mohammad Abid Fromuli — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
