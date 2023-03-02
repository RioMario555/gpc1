import React from "react";
import "./Footer.css";
import gps from "../../assets/icons/logo.svg";
import facebook from "../../assets/icons/facebook.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import waypoint from "../../assets/icons/waypoint.svg";
import call from "../../assets/icons/call.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_left">
        <div className="icone_1">
          <img className="gps_logo" alt="gps_logo" src={gps} />
          <div className="icone_conta">
            <p>შემოგვიერთდით</p>
            <img className="facebook" alt="facebook_logo" src={facebook} />
            <img className="facebook" alt="youtube_logo" src={youtube} />
            <img className="facebook" alt="instagram_logo" src={instagram} />
          </div>
        </div>
        <div className="footer_centre">
          <div className="product_list">
            <h3>პროდუქცია</h3>
            <ul>
              <li>მედიკამენტები</li>
              <li>საყოფაცხოვრებო</li>
              <li>ჰიგიენური საშუალებები</li>
              <li>კოსმეტიკა</li>
              <li>სილამაზის პროდუქცია</li>
            </ul>
          </div>
          <div className="product_list">
            <h3>ჩვენი ბრენდები</h3>
            <ul>
              <li>ლიერაკი</li>
              <li>ნუქსი</li>
              <li>ფიტო</li>
              <li>როქსი დოქტორ</li>
              <li>რენო</li>
              <li>ყველა ბრენდი</li>
            </ul>
          </div>
          <div className="product_list">
            <h3>კომპანია</h3>
            <ul>
              <li>ისტორია</li>
              <li>მიღწევები და ჯილდოები</li>
              <li>მართვა და მენეჯმენტი</li>
              <li>ჩვენი გუნდი</li>
              <li>ვაკანსიები</li>
            </ul>
          </div>
          <div className="contact_list">
            <h3>კონტაქტი</h3>
            <div className="waypoint">
              <img className="waypoint" alt="waypoint" src={waypoint} />
              <p>ბელიაშვილის 142</p>
            </div>
            <div className="waypoint">
              <img className="call" alt="waypoint" src={call} />
              <p>(+995 32) 2940740</p>
            </div>
            <div className="waypoint">
              <img className="call_2" alt="waypoint" src={call} />
              <p>(+995 32) 2710707</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
