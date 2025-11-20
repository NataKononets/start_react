import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark} from "@fortawesome/free-solid-svg-icons";

export default function Header({ date, logo, avatar, onSearch }) {
  const [q, setQ] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const submit = (e) => {
    e.preventDefault();
    const value = q.trim();
    if (!value) return;
    onSearch?.(value);
  };

  const toggleSearch = () => {
    setIsOpen((prev) => {
      if (prev) {
       setQ("");
      }
      return !prev;
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      setQ("");
      setIsOpen(false);
    }
  };

  return (
    <header className="header container d-flex align-items-center justify-content-between pt-5">
    <div className="d-flex align-items-center">
      <img src={logo} className="logo" alt="Netflix" />
      <div className="separator mx-3" />
      <span className="date-text">{date}</span>
    </div>

    <nav className="header-nav d-flex gap-4">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/price" className="nav-link">Price</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
    </nav>

    <div className="d-flex align-items-center position-relative">
      {isOpen && (
        <div className="search-box">
          <form onSubmit={submit}>
            <input
              ref={inputRef}
              type="text"
              className="search-input"
              placeholder="Search..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={onKeyDown}
            />
          </form>
        </div>
      )}

      <button
        type="button"
        className="search-toggle-btn ms-3"
        onClick={toggleSearch}
        aria-label={isOpen ? "Close search" : "Open search"}
      >
    <FontAwesomeIcon icon={isOpen ? faXmark: faSearch}/>
      </button>

      <img src={avatar} className="avatar ms-3" alt="User avatar" />
    </div>
  </header>
  );
}