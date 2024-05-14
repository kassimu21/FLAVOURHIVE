import React from 'react';
import './style.scss';

const Navbar = () => {
  const menuList = [
    "Home",
    // "Recipes",
    "Services",
    "About",
    "Faq",
    "Contact",
  ]
  return (
    <>
        <div className="nav_wrapper">
            <div className="nav">
                <div className="logo"><img src='/images/logo-lg.png' /></div>
                <div className="menu_links">
                  <div className="links">
                    {menuList.map((item) => (
                      <a>{item}</a>
                    ))}
                  </div>
                  
                </div>
                <div className="burger">
                  <img src='/images/menu.png' />
                  </div>
            </div>
        </div>
    </>
  )
}

export default Navbar