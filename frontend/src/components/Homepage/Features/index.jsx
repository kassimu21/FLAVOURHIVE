import React from "react";
import "./style.scss";
const Features = () => {
  return (
    <div className="pd_hero pd_features" id="features">
      <h4>FEATURES</h4>
      <h2>DISCOVER OUR AWESOME SERVICES</h2>
      <div className="hero_flex">
        <div className="text_box">
          <div className="inner_flex">
            <img src="/images/chefc.svg" alt="" />
            <div className="inner_text">
              <h3>Be A Culinary Chef</h3>
              <p>
                Search out over 200+ thousand recipes over the world using
                keywords
              </p>
            </div>
            <span></span>
          </div>
        </div>
        <div className="text_box">
          <div className="inner_flex">
            <img src="/images/dineset.png" alt="" />
            <div className="inner_text">
              <h3>Quality Recipes</h3>
              <p>
                Search out over 400+ thousand recipes over the world using
                keywords
              </p>
            </div>
            <span></span>
          </div>
        </div>
      </div>
      <div className="hero_flex">
        <div className="text_box">
          <div className="inner_flex">
            <img src="/images/spatula.png" alt="" />
            <div className="inner_text" style={{ marginLeft: "20px" }}>
              <h3>Be A Culinary Chef</h3>
              <p>
                Search out over 200+ thousand recipes over the world using
                keywords
              </p>
            </div>
            <span></span>
          </div>
        </div>
        <div className="text_box">
          <div className="inner_flex">
            <img src="/images/hotplate.png" alt="" />
            <div className="inner_text">
              <h3>Be A Culinary Chef</h3>
              <p>
                Search out over 200+ thousand recipes over the world using
                keywords
              </p>
            </div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
