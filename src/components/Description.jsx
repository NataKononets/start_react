import React, { Component } from "react";

class Description extends Component {
  renderStar(i) {
    const { rating, onRate } = this.props;
    const filled = i <= rating;
    const cls = filled ? "fas fa-star" : "far fa-star";
    return (
      <i
        key={i}
        className={cls}
        role="button"
        onClick={() => onRate?.(i)}
        aria-label={`Rate ${i}`}
        title={`Rate ${i}`}
      />
    );
  }

  render() {
    const { text, rating, onStreamNow } = this.props;
    return (
      <section className="description">
        <p className="description-text mb-4">{text}</p>

        <div className="rating d-flex align-items-center mb-4" aria-label={`rating ${rating} of 5`}>
          {[1, 2, 3, 4, 5].map((i) => this.renderStar(i))}
        </div>

        <div className="buttons d-flex align-items-center">
          <button className="stream-now me-3" onClick={onStreamNow}>
            <i className="fa-solid fa-play me-2"></i>
            STREAM NOW
          </button>
          <button className="all-episodes">ALL EPISODES</button>
        </div>
      </section>
    );
  }
}

export default Description;