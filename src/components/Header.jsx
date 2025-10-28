import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <header>
        <div className="header-left">
          <img className="logo" src="img/netflix-logo-png-2562 1.png" alt="Netflix"/>
          <div className="separator"></div>
          <span className="date-text">Friday July 8th</span>
        </div>

        <div className="header-right">
          <form className="search" action="#" method="get">
            <input className="search-input" type="text" name="q" placeholder="Search..."/>
            <button className="search-button" type="submit" aria-label="Search">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <img className="avatar" src="img/Ellipse 2.png" alt="User avatar"/>
        </div>
    </header>
        );
    }
}

export default Header;
