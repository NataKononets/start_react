import React from "react";

export default function BottomHeader({ title, onPrev, onNext }) {
  return (
    <div className="bottom-header d-flex align-items-center justify-content-between mt-5">
      <h2 className="m-0 fw-bold text-uppercase">{title}</h2>
      <div className="nav-buttons d-flex align-items-center">

        <button
          type="button"
          aria-label="Previous"
          className="nav-arrow popular-prev" 
          onClick={onPrev}
        >
          <i className="fa-solid fa-chevron-left" />
        </button>

        <button
          type="button"
          aria-label="Next"
          className="nav-arrow ms-2 popular-next" 
          onClick={onNext}
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
</div>
  );
}