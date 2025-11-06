import "./App.css";
import Header from "./components/Header.jsx";
import Description from "./components/Description.jsx";
import BottomHeader from "./components/BottomHeader.jsx";
import ImageRow from "./components/ImageRow.jsx";
import AgeBox from "./components/AgeBox.jsx";
import Title from "./components/Title.jsx";

export default function App() {
  return (
  <section className="hero"> 
    <div className="container">
        <Header />
        <Title/>
        <Description />  
        <BottomHeader />
        <ImageRow />
        <AgeBox />
     
    </div></section>
  );
}