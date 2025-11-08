import React from "react";

export default function Description({ text, rating = 0, onRate, onStreamNow }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <section className="description">
      <p className="description-text mb-4">{text}</p>

      <div className="rating d-flex align-items-center mb-4" aria-label={'rating ${rating} of 5'}>
        {stars.map((n) => (
          <i
            key={n}
            role="button"
            tabIndex={0}
            className={n <= rating ? "fas fa-star me-2" : "far fa-star me-2"}
            onClick={() => onRate?.(n)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onRate?.(n)}
            aria-label={'Set rating ${n}'}
          />
        ))}
      </div>

      <div className="buttons d-flex align-items-center">
        <button className="stream-now me-3" onClick={() => onStreamNow?.()}>
          STREAM NOW <i className="bi bi-play-fill"></i>
        </button>
        <button className="all-episodes">ALL EPISODES</button>
      </div>
    </section>
  );
}