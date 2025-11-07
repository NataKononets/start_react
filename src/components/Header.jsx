import React, { Component } from 'react';
export default function Header({ date, logo, avatar, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q")?.trim() || "";
    onSearch?.(q);
  };

  return (
    <header className="header container d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <img src={logo} className="logo" alt="Netflix" />
        <div className="separator" aria-hidden="true"></div>
        <span className="date-text">{date}</span>
      </div>

      <div className="d-flex align-items-center">
        <form className="search d-flex align-items-center" role="search" onSubmit={handleSubmit}>
          <input className="search-input" type="text" name="q" placeholder="Search..." aria-label="Search" />
          <button className="search-button" type="submit" aria-label="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
        <img src={avatar} className="avatar ms-3" alt="User avatar" />
      </div>
    </header>
  );
}
