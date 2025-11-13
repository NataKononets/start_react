import { useEffect, useRef, useState } from "react";

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
        <div className="separator" aria-hidden="true" />
        <span className="date-text">{date}</span>
      </div>

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
          <i className={isOpen ? "bi bi-x-lg" : "bi bi-search"} />
        </button>

        <img src={avatar} className="avatar ms-3" alt="User avatar" />
      </div>
    </header>
  );
}