import React from "react";

export default function AgeBox({ value = "16+" }) {
  return (
    <div className="age-box position-absolute d-flex align-items-center">
      <div className="bar"></div>
      <div className="age-text ms-3">{value}</div>
    </div>
  );
}