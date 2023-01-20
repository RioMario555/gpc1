import React from 'react'
import './product.css'
import shampun from "../../assets/icons/shampun.svg";
import star from "../../assets/icons/star.svg";
import path from "../../assets/icons/path.svg";

const Product = () => {
  return (
    <div className="line">
        <div className="about">
          <img className="shamp" alt="shamp_logo" src={shampun} />
          <div className="background">
            <div className="sale">
              <div className="sale__1">
                <p className="blue">Yves Rocher</p>
                <div className='sale_1_right'>
                <img className="star" alt="star" src={star} />
                <p className="gray">(12)</p>
                </div>
              </div>
              <p className='resto'>აღმდგენი ბალზამი-შამპუნი</p>
              <p className="gray">300 მლ</p>
              <div className="pass">
              <p>12.50 ლ   15.00 ლ</p>
              <div className="buy">
                <img className='bag' alt='shop' src={path} />
                <p className='buy_1'>ყიდვა</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <img className="shamp" alt="shamp_logo" src={shampun} />
          <div className="background">
            <div className="sale">
              <div className="sale__1">
                <p className="blue">Yves Rocher</p>
                <div className='sale_1_right'>
                <img className="star" alt="star" src={star} />
                <p className="gray">(12)</p>
                </div>
              </div>
              <p>აღმდგენი ბალზამი-შამპუნი</p>
              <p className="gray">300 მლ</p>
              <div className="pass">
              <p>12.50 ლ   15.00 ლ</p>
              <div className="click">
              <img className='bag' alt='shop' src={path} />
                <p className='buy_1'>ყიდვა</p>
              </div>
              </div>
            </div>
          </div>
        </div><div className="about">
          <img className="shamp" alt="shamp_logo" src={shampun} />
          <div className="background">
            <div className="sale">
              <div className="sale__1">
                <p className="blue">Yves Rocher</p>
                <div className='sale_1_right'>
                <img className="star" alt="star" src={star} />
                <p className="gray">(12)</p>
                </div>
              </div>
              <p>აღმდგენი ბალზამი-შამპუნი</p>
              <p className="gray">300 მლ</p>
              <div className="pass">
              <p>12.50 ლ   15.00 ლ</p>
              <div className="click">
              <img className='bag' alt='shop' src={path} />
              <p className='buy_1'>ყიდვა</p>
              </div>
              </div>
            </div>
          </div>
        </div><div className="about">
          <img className="shamp" alt="shamp_logo" src={shampun} />
          <div className="background">
            <div className="sale">
              <div className="sale__1">
                <p className="blue">Yves Rocher</p>
                <div className='sale_1_right'>
                <img className="star" alt="star" src={star} />
                <p className="gray">(12)</p>
                </div>
              </div>
              <p>აღმდგენი ბალზამი-შამპუნი</p>
              <p className="gray">300 მლ</p>
              <div className="pass">
              <p>12.50 ლ   15.00 ლ</p>
              <div className="click">
              <img className='bag' alt='shop' src={path} />
              <p className='buy_1'>ყიდვა</p>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product