import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  let dataCollection = data.map((info) => {
    return (
      <Card
        key={info.id}
        {...info}
      />
    );
  });

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="reviews-section">
      {dataCollection}
      </div>
    </div>
  );
}

// - img ("katie-zaferes.png")
// - rating ("5.0")
// - reviewCount (6)
// - country (Whatever you want)
// - title ("Life Lessons with Katie Zaferes")
// - price (136)
