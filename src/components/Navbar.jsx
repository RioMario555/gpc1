import React from 'react'
import gpcImg from '../assets/logo.svg'
import shopIcone from '../assets/shop.svg'
import heartIcone from '../assets/heart.svg'
import personIcone from '../assets/person.svg'


const Navbar = () => {
  return (
    <div className="header">
        <div className="home">
            <img className="logo" src={gpcImg}/>
        </div>
      <div className="menu">
        <ul>
          <li>პროდუქცია</li>
          <li>ჩვენს შესახებ</li>
          <li>აფთიაქები</li>
        </ul>
      </div>
      <div className="login">
        <img className="shop" src={shopIcone}/>
        <img className="shop" src={heartIcone}/>
        <img className="person" src={personIcone}/>
        <p>კაბინეტი</p>
      </div>
    </div>
  )
}

export default Navbar