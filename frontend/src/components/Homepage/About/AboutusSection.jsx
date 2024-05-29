import React from 'react'
import './styles.scss'
import { fetchAllRecipes } from '../../../API/api'
const AboutSection = () => {
    fetchAllRecipes()

  return (
    <>
        
        <div className="pd_hero pd_about">
       <h2 className='title'>About Us</h2>
        <p className='sub-title'>Uncover our story and get new insights about us</p>
            <div className="hero_flex">
              
                <div className="img_box">
                    <img src='/images/first-img.png'/>
                </div>
                <div className="text_box">
                    <h4>Welcome to <span className='first'>FLAVOUR</span><span className='second'>HIVE</span></h4>
                    <p>At FLAVORHIVE, we're not just about recipes; we're about the joy of cooking, the pleasure of sharing meals with loved ones, and the adventure of exploring new flavors.</p>
                    <div className="flex">
                        <div className="one">
                            <span className="numbers">400k+</span>
                            <span className='sub'>POPULAR RECIPES</span>
                        </div>
                        <div className="two">
                        <span className="numbers">500k+</span>
                            <span className='sub'>COUNTRIES AND CITIES </span>
                        </div>
                        <div className="three">
                        <span className="numbers">50k+</span>
                            <span className='sub'>CONTRIBUTORS ACTION</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero_flex">
                <div className="text_box">
                    <h4>OUR VISION</h4>
                    <p>Our vision began with a simple love for food—a love passed down through generations and fueled by countless hours spent experimenting in the kitchen. Whether you're a seasoned chef or a culinary novice, our goal is to inspire and empower you to create delicious dishes that delight the senses and bring people together.</p>
                    <button className='general_btn abt_btn'>Get Started</button>
                </div>
                <div className="img_box">
                    <img src='/images/second-seg.png'/>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default AboutSection