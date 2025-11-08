import React from "react";

export default function ImageRow({ posters = [], onPosterClick }) {
  return (
    <div className="image-row d-flex flex-nowrap mt-3">
      {posters.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={'Poster ${i + 1}'}
          className="poster me-3"
          onClick={() => onPosterClick?.(i)}
          role="button"
        />
      ))}
    </div>
  );
}