import React, { Component } from 'react';
import p1 from "../assets/img/Rectangle6.png";
import p2 from "../assets/img/Rectangle7.jpg";
import p3 from "../assets/img/Rectangle8.png";
import p4 from "../assets/img/Rectangle9.png";
import p5 from "../assets/img/Rectangle11.jpg";

const posters = [p1, p2, p3, p4, p5];

export default function ImageRow() {
  return (
   <div className="image-row d-flex flex-nowrap mt-3">
  {posters.map((src, i) => (
    <img key={i} src={src} alt="" className="poster me-3" />
  ))}
</div>
  );
}
