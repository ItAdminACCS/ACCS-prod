import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const isLoggedIn = false; // REPLACE with actual auth check

  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <img
          src={logo}
          alt="Logo"
          className="logo-image"
        />
        <div className="logo-text">
          <span>Argyll Community</span>
          <span>Counselling Service</span>
        </div>
      </Link>
      <nav className="nav">
        <div className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/blog">Blog</Link>
        <Link className="nav-link" to="/team">Team</Link>
        <Link className="nav-link" to="/getting-help">Getting Help</Link>
        <Link className="nav-link" to="/donate">Donate</Link>
        {isLoggedIn ? (
        <Link className="nav-link" to="/logout">Log out</Link>
        ) : (
          <>
            <Link className="nav-link" to="/login">Login</Link>
          </>
        )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
