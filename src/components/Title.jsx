import React, { Component } from 'react';

class Title extends Component {
    render() {
     return (
      <section className="description">
        {/* ЖАНРЫ */}
        <div className="genres">
          <span>Drama</span>
          <span className="divider" aria-hidden="true"></span>
          <span>Thriller</span>
          <span className="divider" aria-hidden="true"></span>
          <span>Supernatural</span>
        </div>

        {/* TITLE */}
        <h1 className="title">Stranger Things</h1>

        {/* ИНФО-ЛИНИЯ */}
        <div className="info">
  <span>2019</span>
  <div className="divider" />
  <span className="nowrap"><strong>DIRECTOR:</strong> Shawn&nbsp;Levy</span>
  <div className="divider" />
  <span className="nowrap">Seasons: 3 (5&nbsp;Episodes)</span>
</div>
      </section>
    );
  }
}


export default Title;