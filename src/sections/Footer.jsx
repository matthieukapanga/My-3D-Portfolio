import React from 'react'
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="flex flex-col justify-center">
        <p>© {new Date().getFullYear()}  All rights reserved.</p>
      </div>
      <div className="socials">
        {socialImgs.map((socialImg, index) => (
          <div key={index} className="icon">
            <a href={socialImg.url}>
            <img src={socialImg.imgPath} alt="social icon" />
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-center md:text-end">
        Designed and developed by Matthieu Kapanga 
        </p>
      </div>
    </div>
  </footer>
);
}

export default Footer