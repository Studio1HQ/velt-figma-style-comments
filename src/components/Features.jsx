import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: "🤖",
      title: "Advanced AI",
      description:
        "State-of-the-art machine learning algorithms powering your workflow",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Process data and generate results in milliseconds",
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "Enterprise-grade security with end-to-end encryption",
    },
  ];

  return (
    <section id="features" className="features">
      <h2>Features that set us apart</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
