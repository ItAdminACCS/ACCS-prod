import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./GettingHelp.css";

const GettingHelp = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   // from EmailJS dashboard
        "YOUR_TEMPLATE_ID",  // from EmailJS dashboard
        form.current,
        "YOUR_PUBLIC_KEY"    // from EmailJS account
      )
      .then(
        () => setStatus("Message sent successfully!"),
        (error) => setStatus("Failed to send message: " + error.text)
      );
  };

  return (
    <div className="help-container">
      <h1>Get Help</h1>
      <form ref={form} onSubmit={sendEmail} className="help-form">
        <label>
          Your Name
          <input type="text" name="user_name" required />
        </label>
        <label>
          Your Email
          <input type="email" name="user_email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>
        <button type="submit">Send</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </div>
  );
};

export default GettingHelp;
