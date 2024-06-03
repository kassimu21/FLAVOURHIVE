import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="pd_hero">
        <div className="absolut_leaf">
          <img src="/images/leaf-hero.png" />
        </div>
        <div className="hero_flex">
          <div className="text_box">
            <h1>
              Simple and <br /> Tasty <span>Recipes</span>
            </h1>
            <p className="hero-par">
              A hive where recipes of different <br />
              continental dishes are found
            </p>
            
              <Link to="/recipes" className="a">
                <button className="general_btn">
                <a>Get Started</a>
                </button>
              </Link>
          </div>
          <div className="img_box">
            <img src="/images/hero.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
