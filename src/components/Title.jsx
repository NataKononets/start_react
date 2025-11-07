import React, { Component } from "react";

class Title extends Component {
  render() {
    const { genres, title, year, director, seasons, episodes } = this.props;
    return (
      <section className="description">
        {/* жанры */}
        <div className="genres">
          {genres.map((g, i) => (
            <React.Fragment key={g}>
              {i > 0 && <span className="divider" aria-hidden="true"></span>}
              <span>{g}</span>
            </React.Fragment>
          ))}
        </div>

        {/* заголовок */}
        <h1 className="title">{title}</h1>

        {/* инфо-линия */}
        <div className="info">
          <span>{year}</span>
          <div className="divider" />
          <span className="nowrap">
            <strong>DIRECTOR:</strong>&nbsp;{director}
          </span>
          <div className="divider" />
          <span className="nowrap">
            Seasons: {seasons} ({episodes}&nbsp;Episodes)
          </span>
        </div>
      </section>
    );
  }
}

export default Title;