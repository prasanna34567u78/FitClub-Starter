import React from 'react';
import Linkedin from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";
import Logo from "../../assets/logo.png";
import GitHub from "../../assets/github.png";
import "./Footer.css";
const Footer = () => {
  return (
   <div className="Footer-container">
    <hr />
    <div className="footer">
    <div className="social-links">
        <img src={GitHub} alt="" />
        <img src={Instagram}  alt=""  />
       
        <img src={Linkedin} alt="" />
    </div>
    <div className="logo-footer">
        <img src={Logo} alt="" />

    </div>
    </div>
    <div className='blur blur-f-1'></div>
    <div className='blur blur-f-2'></div>
   <div className='copy'>
    &copy; Prasanna Kumar | 2022 
   </div>
   </div>
   
    )
}

export default Footer