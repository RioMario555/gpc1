import React from "react";
import gpcImg from "../../assets/icons/logo.svg";
import shopIcone from "../../assets/icons/shop.svg";
import heartIcone from "../../assets/icons/heart.svg";
import personIcone from "../../assets/icons/person.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="header">
        <div className="home">
          <img className="logo" alt="logo" src={gpcImg} />
        </div>
        <nav className="menu">
          <ul>
            <li>პროდუქცია</li>
            <li>ჩვენს შესახებ</li>
            <li>აფთიაქები</li>
          </ul>
          <div className="login">
            <img className="shop" alt="shop" src={shopIcone} />
            <img className="shop" alt="shop" src={heartIcone} />
            <img className="person" alt="shop" src={personIcone} />
            <p>კაბინეტი</p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
