import React from 'react'
// import './styles.scss'
const AboutSection = () => {
  return (
    <>
        <div className="pd_hero">
       
            <div className="hero_flex">
              
                <div className="img_box">
                    <img src='/images/hero.png'/>
                </div>
                <div className="text_box">
                    <h1>Simple and <br /> Tasty <span>Recipes</span></h1>
                    <p>A hive where recipes of different <br />continental dishes are found</p>
                    <button className='general_btn'>Get Started</button>
                </div>
            </div>
        </div>
        <div className="pd_hero">
       
            <div className="hero_flex">
                <div className="text_box">
                    <h1>Simple and <br /> Tasty <span>Recipes</span></h1>
                    <p>A hive where recipes of different <br />continental dishes are found</p>
                    <button className='general_btn'>Get Started</button>
                </div>
                <div className="img_box">
                    <img src='/images/hero.png'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutSection