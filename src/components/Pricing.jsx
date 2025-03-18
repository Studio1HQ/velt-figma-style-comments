import React from "react";
import "./Pricing.css";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      features: [
        "Basic AI Processing",
        "5 Projects",
        "24/7 Support",
        "1GB Storage",
      ],
      isPopular: false,
    },
    {
      name: "Professional",
      price: "99",
      features: [
        "Advanced AI Processing",
        "Unlimited Projects",
        "Priority Support",
        "10GB Storage",
        "API Access",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "199",
      features: [
        "Custom AI Solutions",
        "Unlimited Everything",
        "Dedicated Support",
        "Unlimited Storage",
        "Custom Integration",
        "SLA Guarantee",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <h2>Choose Your Plan</h2>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            className={`pricing-card ${plan.isPopular ? "popular" : ""}`}
            key={index}
          >
            {plan.isPopular && (
              <div className="popular-badge">Most Popular</div>
            )}
            <h3>{plan.name}</h3>
            <div className="price">
              <span className="currency">$</span>
              {plan.price}
              <span className="period">/month</span>
            </div>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
            <button className="cta-button">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
