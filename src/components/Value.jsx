import React from "react";
import "./Value.css";
import { FaShieldAlt, FaPiggyBank, FaStar, FaHandsHelping } from "react-icons/fa";

const values = [
  {
    icon: <FaShieldAlt />,
    title: "Trusted Agents",
    description: "Our team is experienced and reliable, guiding you through every step.",
  },
  {
    icon: <FaPiggyBank />,
    title: "Affordable Pricing",
    description: "We offer properties that give you real value for your money.",
  },
  {
    icon: <FaStar />,
    title: "Top Quality Listings",
    description: "We carefully select properties that meet our high standards.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Customer Support",
    description: "We’re always available to answer your questions and help you move forward.",
  },
];

const Value = () => {
  return (
    <section className="value-section" id="value">
      <h2 className="value-title">Why Choose Kijo?</h2>
      <div className="value-grid">
        {values.map((value, index) => (
          <div className="value-card" key={index}>
            <div className="value-icon">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Value;