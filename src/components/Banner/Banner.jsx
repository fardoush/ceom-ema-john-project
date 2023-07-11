import React from "react";
import banner from '../../assets/images/banner-img.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div className="banner-section section-padding">
        <div className="banner-content">
          <span className="">Sale up to 70% off</span>
          <h1>New Collection For Fall</h1>
          <p className="">
            Discover all the new arrivals of ready-to-wear collection.
          </p>

          <div className="button-holder">
            <button className="btn banner-btn">SHOP NOW</button>
          </div>
        </div>
        <div className="banner-img-inner">
        <div className="banner-img">
          <img src={banner} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
