import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Joan K.",
    image: "/assets/im.jpg",
    message: "Kijo helped me find the perfect beachfront home. Smooth experience!",
  },
  {
    name: "Anash.",
    image: "/assets/cc.JPG",
    message: "Great team. Honest, responsive, and they know the African market well.",
  },
  {
    name: "Gift Arnold.",
    image: "/assets/frontend.jpg",
    message: "My investment in Kigali was handled with such care and professionalism.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} className="testimonial-image" />
            <p className="testimonial-message">“{t.message}”</p>
            <h4 className="testimonial-name">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
