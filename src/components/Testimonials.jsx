import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "This AI solution has transformed how we handle data analysis. The results are incredible, and the time savings are enormous.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateLabs",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "The accuracy and speed of this platform are unmatched. It's become an essential part of our daily operations.",
    },
    {
      name: "Emma Davis",
      role: "Marketing Director",
      company: "GrowthX",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      text: "Implementation was seamless, and the results were immediate. Our team's productivity has increased by 300%.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <img src={testimonial.image} alt={testimonial.name} />
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
                <p className="company">{testimonial.company}</p>
              </div>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
