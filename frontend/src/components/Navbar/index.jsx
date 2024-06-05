import { useEffect, useState } from "react";
import "./style.scss";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updatePosition = () => {
    setScrollPosition(window.pageYOffset);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", updatePosition);
  }

  const menuList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Features", link: "/#features" },
    { name: "Recipes", link: "/recipes" },
  ];
  return (
    <>
      <div className={`nav_wrapper ${scrollPosition > 0 ? "d_fixed" : ""}`}>
        <div className="nav">
          <div className="logo">
            <a href="/">
              <img src="/images/logo-lg.png" />
            </a>
          </div>
          <div className="menu_links">
            <div className="links">
              {menuList.map((item) => (
                <a href={item.link}>{item.name}</a>
              ))}
            </div>
          </div>
          {/* <div className="burger">
            <img src="/images/menu.png" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
