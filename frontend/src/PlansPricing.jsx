import React from 'react';

const PlansPricing = () => {
  return (
    <div className="plans-pricing-container">
      <h1 className="pricing-heading">Choose your pricing plan</h1>
      
      <div className="pricing-cards-container">
        {/* Personal Plan */}
        <div className="pricing-card">
          <div className="pricing-header">
            <h2 className="plan-title">Personal Plan</h2>
            <div className="price-container">
              <span className="currency">₹</span>
              <span className="price">850</span>
            </div>
            <p className="billing-cycle">Every month</p>
            <p className="plan-target">For You</p>
          </div>
          
          <div className="plan-validity">
            <p>Valid for 12 months</p>
            <p>+ 24 hours free trial</p>
          </div>
          
          <button className="plan-select-btn">Select</button>
          
          <div className="plan-features">
            <p className="feature">Access to 11,000+ top courses</p>
            <p className="feature">Certification prep</p>
            <p className="feature">Goal-focused recommendations</p>
            <p className="feature">AI-powered coding exercises</p>
          </div>
        </div>
        
        {/* Team Plan */}
        <div className="pricing-card">
          <div className="pricing-header">
            <h2 className="plan-title">Team Plan</h2>
            <div className="price-container">
              <span className="currency">₹</span>
              <span className="price">1,200</span>
            </div>
            <p className="billing-cycle">Every month</p>
            <p className="plan-target">For your team</p>
          </div>
          
          <div className="plan-validity">
            <p>Valid for 12 months</p>
            <p>+ 7 day free trial</p>
          </div>
          
          <button className="plan-select-btn">Start Free Trial</button>
          
          <div className="plan-features">
            <p className="feature">Access to 11,000+ top courses</p>
            <p className="feature">Certification</p>
            <p className="feature">Goal-focused recommendations</p>
            <p className="feature">AI-powered coding exercises</p>
            <p className="feature">Analytics and adoption reports</p>
          </div>
        </div>
        
        {/* Enterprise Plan */}
        <div className="pricing-card">
          <div className="pricing-header">
            <h2 className="plan-title">Enterprise Plan</h2>
            <div className="price-container">
              <span className="currency">₹</span>
              <span className="price">9,999</span>
            </div>
            <p className="billing-cycle">Every year</p>
            <p className="plan-target">For your whole organisation</p>
          </div>
          
          <div className="plan-validity">
            <p>Valid for 2 years</p>
            <p>+ 15 day free trial</p>
          </div>
          
          <button className="plan-select-btn">Select</button>
          
          <div className="plan-features">
            <p className="feature">Access to 25,000+ top courses</p>
            <p className="feature">Certification prep</p>
            <p className="feature">Goal-focused recommendations</p>
            <p className="feature">AI-powered coding exercises</p>
            <p className="feature">Advanced analytics and insights</p>
            <p className="feature">Dedicated customer success team</p>
            <p className="feature">International course collection<br />featuring 15 languages</p>
            <p className="feature">Strategic implementation services<br />with add-on</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPricing;