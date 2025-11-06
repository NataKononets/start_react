import React, { Component } from 'react';
import logo from '../assets/img/netflix-logo-png-25621.png';
import avatar from '../assets/img/Ellipse2.png'; 

export default function Header() {
  return (
    <header className="header container d-flex align-items-center justify-content-between">

      <div className="d-flex align-items-center">
        <img src={logo} className="logo" alt="Netflix" />
        <div className="separator" aria-hidden="true"></div>
        <span className="date-text">Friday July 8th</span>
      </div>
      <div className="d-flex align-items-center">
        <form className="search d-flex align-items-center" action="#" role="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            aria-label="Search"
          />
          <button className="search-button" type="submit" aria-label="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>

        <img src={avatar} className="avatar ms-3" alt="User avatar" />
      </div>

    </header>
  );
}
