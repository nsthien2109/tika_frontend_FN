import React from "react";
import "./Footer.scss";
import couponImg from "../../Assets/coupon.png";
import googlePlay from "../../Assets/google-play.png";
import appStore from "../../Assets/app-store.png";
const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer__subscribe">
        <div className="footer__subscribe-left">
          <h6 className="entry-subtitle">$20 discount for your first order</h6>
          <h3 className="entry-title">Join our newsletter and get...</h3>
          <p>
            Join our email subscription now to get updates <br /> on promotions
            and coupons.
          </p>
          <form action="">
            <div className="footer__subscribe-mail">
              <i className="ri-mail-line"></i>
              <input
                type="text"
                className="footer__subscribe-mail-input"
                placeholder="Your email address"
              />
              <input className="sub-btn" type="button" value="Subscribe" />
            </div>
          </form>
        </div>
        <div className="footer__subscribe-right">
          <img
            src={couponImg}
            alt="Coupon"
            className="footer__subscribe-right-coupon"
          />
        </div>
      </div>
      <div className="footer__iconboxes">
        <div className="footer__iconboxes-item">
          <i className="ri-seedling-line"></i>
          <p>Everyday fresh products</p>
        </div>
        <div className="footer__iconboxes-item">
          <i className="ri-truck-line"></i>
          <p>Free delivery for order over $70</p>
        </div>
        <div className="footer__iconboxes-item">
          <i className="ri-percent-line"></i>
          <p>Daily Mega Discounts</p>
        </div>
        <div className="footer__iconboxes-item">
          <i className="ri-exchange-dollar-line"></i>
          <p>Best price on the market</p>
        </div>
      </div>
      <div className="footer__contact">
        <div className="footer__contact-phone">
          <div className="footer__contact-phone-icon">
            <i className="ri-phone-line"></i>
          </div>
          <div className="footer__contact-phone-content">
            <h3>0705459542</h3>
            <p>Working 8:00 - 22:00</p>
          </div>
        </div>
        <div className="footer__contact-download">
          <div className="footer__contact-download-title">
            <h3>Download App on Mobile :</h3>
            <p>15% discount on your first purchase</p>
          </div>
          <div className="footer__contact-download-link">
            <a href="#aaa" className="google-play">
              <img src={googlePlay} alt="Google play" />
            </a>
            <a href="#aaa" className="app-store">
              <img src={appStore} alt="App Store" />
            </a>
          </div>
          <div className="footer__contact-dowload-social">
            <div className="footer__contact-dowload-social-item">
              <i className="ri-facebook-fill"></i>
            </div>
            <div className="footer__contact-dowload-social-item">
              <i className="ri-twitter-fill"></i>
            </div>
            <div className="footer__contact-dowload-social-item">
              <i className="ri-instagram-fill"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__end">
        <p className="copy-right">
          Copyright 2022 © Tika Shop Power by Nguyen Shi Thien.
        </p>
        <div className="footer__end-menu">
          <a href="#aaa" className="footer__end-menu-item">
            Privacy Policy
          </a>
          <a href="#aaa" className="footer__end-menu-item">
            Terms and Conditions
          </a>
          <a href="#aaa" className="footer__end-menu-item">
            Cookie
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
