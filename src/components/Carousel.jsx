import React from 'react'
import './stylecarou.css'


const Carousel = () => {
  return (
    <div className="product">
      <h1 className="name">პროდუქცია</h1>
      <div className="list">
        <div className="items-list">
          <p>ახალი პროდუქცია</p>
        </div>
        <div className="items-list">
          <p>ფასდაკლება</p>
        </div>
        <div className="items-list">
          <p>პოპულარული</p>
        </div>
        <div className="items-list">
          <p>აუცილებელი</p>
        </div>
      </div>
    </div>
  )
}

export default Carousel