import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Argyll Community Counselling Service</p>
    <p>All rights reserved.</p>
  </footer>
);

export default Footer;
