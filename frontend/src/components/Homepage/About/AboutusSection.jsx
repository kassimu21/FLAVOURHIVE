import React from "react";
import "./styles.scss";
import { fetchAllRecipes } from "../../../API/api";
const AboutSection = () => {
  fetchAllRecipes();

  return (
    <>
      <div className="pd_hero pd_about" id="about">
        <h2 className="title">What we're about</h2>
        <p className="sub-title">
          Uncover our story and get new insights about us
        </p>
        <div className="hero_flex">
          <div className="img_box">
            <img src="/images/first-img.png" />
          </div>
          <div className="text_box">
            <h4>
              Welcome to <span className="first">FLAVOUR</span>
              <span className="second">HIVE</span>
            </h4>
            <p>
              Your ultimate recipe haven where you can discover and share
              delicious moments. Our journey began with a shared love for
              cooking and the desire to make the culinary world more accessible
              to everyone. We envisioned a platform that not only provides
              access to a vast array of recipes but also offers personalized
              experiences and community-driven content. This passion project,
              developed as part of our portfolio for{" "}
              <a href="https://www.holbertonschool.com/" target="_blank">
                Holberton School
              </a>
              , embodies our commitment to innovation, user-centric design, and
              culinary exploration.{" "}
              <a href="https://www.holbertonschool.com/" target="_blank">
                Learn more
              </a>{" "}
              about Holberton School.
            </p>
            <br />
            <div className="team">
              <h3>MEET THE TEAM</h3>
              <div className="team_wrapper">
                <div className="card">
                  <div className="p_img">
                    <img src="images/felz.png" />
                  </div>
                  <p className="name">Felicity Essien</p>
                  <p className="role">Developer/Content</p>
                  <div className="socials"></div>
                </div>
                <div className="card">
                  <div className="p_img">
                    <img src="images/felz.png" />
                  </div>
                  <p className="name">Kassim Sallah</p>
                  <p className="role">Project Manager/Developer</p>
                  <div className="socials"></div>
                </div>
                <div className="card">
                  <div className="p_img">
                    <img src="images/felz.png" />
                  </div>
                  <p className="name">Ololade Essien</p>
                  <p className="role">Developer/UI UX Designer</p>
                  <div className="socials"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero_flex">
          <div className="text_box">
            <h4>OUR INSPIRATION</h4>
            <p>
              Our inspiration for FlavorHive stems from countless hours spent in
              the kitchen, experimenting with ingredients, and trying out new
              recipes. We realized the joy of cooking could be shared more
              effectively with a platform designed to cater to all cooking
              enthusiasts, from novice cooks to seasoned chefs. Our goal was to
              address common challenges such as ingredient management, cooking
              guidance, and personalized recipe recommendations. Through
              FlavorHive, we aim to transform cooking from a mundane task into a
              delightful experience for everyone.
            </p>
            <a href="https://github.com/kassimu21/FLAVOURHIVE" target="_blank">
              <button className="general_btn abt_btn">Github Repo</button>
            </a>
          </div>
          <div className="img_box">
            <img src="/images/second-seg.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
