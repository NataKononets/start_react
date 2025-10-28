import React, { Component } from 'react';

class Description extends Component {
    render() {
        return (
     <section className="description">
        <div className="genres">
          <span>
            Drama
          </span>
          <div className="divider">

          </div>
          <span>Thriller</span>
          <div className="divider"></div>
          <span>Supernatural</span>
        </div>
        <h1 className="title">Stranger Things</h1>

        <div className="info">
          <span>2019</span>
          <div className="divider"></div>
          <span>DIRECTOR: Shawn Levy</span>
          <div className="divider"></div>
          <span>Seasons: 3 (5 Episodes)</span>
        </div>

        <p className="description-text">
          In a 1980s Indiana town, a group of friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
        </p>

        <div className="rating" aria-label="rating 3 of 5">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>

        <div className="buttons">
          <button className="stream-now">
            STREAM NOW <i className="fas fa-play"></i>
          </button>
          <button className="all-episodes">ALL EPISODES</button>
        </div>
        </section>
        );
    }
}

export default Description;