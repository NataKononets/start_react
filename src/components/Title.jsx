import React, { Component } from "react";

class Title extends Component {
  static defaultProps = {
    onGenreClick: () => {},
  };

  render() {
    const { genres, title, year, director, seasons, episodes, onGenreClick } = this.props;

    return (
      <section className="description">
        {/* ЖАНРЫ */}
        <div className="genres">
          {genres.map((g, i) => (
            <React.Fragment key={g}>
              {i > 0 && <span className="divider" aria-hidden="true"></span>}
              <span
                className="genre-item"
                onClick={() => onGenreClick(g)}
                style={{ cursor: "pointer" }}
              >
                {g}
              </span>
            </React.Fragment>
          ))}
        </div>

        <h1 className="title">{title}</h1>

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