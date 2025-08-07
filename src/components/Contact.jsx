import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fx0cm8d",   
        "template_iwzga9a",  
        form.current,
        "4DBf2IGimofCTS_Op"     
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
        {messageSent && <p className="success">Message sent successfully!</p>}
    
<div className="map">
  <iframe
    src="https://maps.google.com/maps?q=kampala&t=&z=13&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="300"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>
      </form>
    </section>
  );
};

export default Contact;