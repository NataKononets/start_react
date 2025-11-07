import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import Title from "./components/Title.jsx";
import Description from "./components/Description.jsx";
import BottomHeader from "./components/BottomHeader.jsx";
import ImageRow from "./components/ImageRow.jsx";
import AgeBox from "./components/AgeBox.jsx";

import logo from "./assets/img/netflix-logo-png-25621.png";
import avatar from "./assets/img/Ellipse2.png";
import p1 from "./assets/img/Rectangle6.png";
import p2 from "./assets/img/Rectangle7.jpg";
import p3 from "./assets/img/Rectangle8.png";
import p4 from "./assets/img/Rectangle9.png";
import p5 from "./assets/img/Rectangle11.jpg";

export default function App() {

  const [rating, setRating] = useState(3);
  const posters = [p1, p2, p3, p4, p5];

  const genres = ["Drama", "Thriller", "Supernatural"];
  const movie = {
    title: "Stranger Things",
    year: 2019,
    director: "Shawn Levy",
    seasons: 3,
    episodes: 5,
    description:
      "In a 1980s Indiana town, a group of friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries."
  };

  const handleSearch = (q) => console.log("search:", q);
  const handleStreamNow = () => console.log("STREAM NOW clicked");
  const handlePrev = () => console.log("Prev");
  const handleNext = () => console.log("Next");
  const handleRate = (n) => setRating(n);

  return (
    <section className="hero">
      <div className="container">
        <Header
          date="Friday July 8th"
          logo={logo}
          avatar={avatar}
          onSearch={handleSearch}
        />

      
        <div className="row">
          <div className="col-lg-6">
            <Title
              genres={genres}
              title={movie.title}
              year={movie.year}
              director={movie.director}
              seasons={movie.seasons}
              episodes={movie.episodes}
            />
            <Description
              text={movie.description}
              rating={rating}
              onRate={handleRate}
              onStreamNow={handleStreamNow}
            />
          </div>
        </div>

        <BottomHeader title="POPULAR THIS WEEK" onPrev={handlePrev} onNext={handleNext} />

        <ImageRow posters={posters} />

        <AgeBox value="16+" />
      </div>
    </section>
  );
}