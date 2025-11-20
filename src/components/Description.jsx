import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";


export default function Description({ text, rating = 0, onRate, onStreamNow }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <section className="description">
      <p className="description-text mb-4">{text}</p>

      <div className="rating d-flex align-items-center mb-4" aria-label={'rating ${rating} of 5'}>
        {stars.map((n) => (
          <span       
            key={n}
            role="button"
            tabIndex={0}
            onClick={() => onRate?.(n)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onRate?.(n)}
            aria-label={`Set rating ${n}`}
            className="me-2"
            style={{cursor:"pointer"}}
          >
            <FontAwesomeIcon icon={n <= rating ? solidStar : regularStar} 
            color={n <= rating ? "gold" : "text-secondary"} 
            size="2x"
             />
          </span>
        ))}
      </div>

      <div className="buttons d-flex align-items-center">
        <button className="stream-now me-3" onClick={() => onStreamNow?.()}>
          STREAM NOW < FontAwesomeIcon icon={faPlay} className="ms-2" />
        </button>
        <button className="all-episodes">ALL EPISODES</button>
      </div>
    </section>
  );
}