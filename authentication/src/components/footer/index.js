import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div className="container">
      <div></div>
      <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
    
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
         
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            UC.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Testing</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          {/* <img src="/img/payment.png" alt="" /> */}
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer;