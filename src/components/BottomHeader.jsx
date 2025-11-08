import React from "react";

export default function BottomHeader({ title, onPrev, onNext }) {
  return (
    <div className="bottom-header d-flex align-items-center justify-content-between mt-5">
      <h2 className="m-0 fw-bold text-uppercase">{title}</h2>
      <div className="nav-buttons d-flex align-items-center">
        <button type="button" aria-label="Previous" onClick={onPrev}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button type="button" aria-label="Next" className="ms-2" onClick={onNext}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}