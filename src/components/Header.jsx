import { useState, useEffect } from "react";

export default function Header({ date, logo, avatar, onSearch }) {

  const [q, setQ] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => setShowSearch(prev => !prev);

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(q.trim());
  };

  useEffect(() => {
    if (q.trim() === "") return;
    console.log("🔎 User typing:", q);
  }, [q]);

  return (
    <header className="header container d-flex align-items-center justify-content-between pt-5">

      <div className="d-flex align-items-center">
        <img src={logo} className="logo" alt="Netflix" />
        <div className="separator" aria-hidden="true"></div>
        <span className="date-text">{date}</span>
      </div>

      <div className="d-flex align-items-center">

        <i
          className="bi bi-search fs-4 text-white me-3"
          style={{ cursor: "pointer" }}
          onClick={toggleSearch}
        ></i>

        {showSearch && (
          <form
            className="search d-flex align-items-center"
            role="search"
            onSubmit={submit}
          >
            <input
              className="search-input"
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="search-button" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        )}

        <img src={avatar} className="avatar ms-3" alt="User avatar" />
      </div>
    </header>
  );
}