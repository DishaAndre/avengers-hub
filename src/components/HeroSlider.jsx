import avengers from "../data/avengers";
import "../styles/slider.css";

function HeroSlider() {
  return (
    <div className="slider">
      {avengers.map((hero) => (
        <div className="slide" key={hero.id}>
          <img src={hero.image} alt={hero.name} />
        </div>
      ))}
    </div>
  );
}

export default HeroSlider;