import React, { Component } from 'react';

class Description extends Component {
    render() {
           return (
             <section className="description">
      
        <p className="description-text mb-4">
          In a 1980s Indiana town, a group of friends witness supernatural forces and secret
          government exploits. As they search for answers, the children unravel a series
          of extraordinary mysteries.
        </p>

        <div className="rating d-flex align-items-center mb-4" aria-label="rating 3 of 5">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>

        <div className="buttons d-flex align-items-center">
          <button className="stream-now me-3">
                   <i className="fa-solid fa-play me-2"></i>
                   STREAM NOW
          </button>

          <button className="all-episodes">
            ALL EPISODES
          </button>
        </div>

      </section>
    );
  }
}
export default Description;