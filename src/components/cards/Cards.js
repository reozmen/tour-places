import "./Cards.css";
import { data } from "../../helpers/data";

const Cards = () => {
  return (
    <div className="card-container">
      {data.map((card, index) => {
        return (
          <div className="cards" key={index}>
            <div className="title">
              <h2>{card.title}</h2>
            </div>
            <img src={card.image} alt={card.title} alt="" />
            <div className="card-over">
              <p>{card.desc}</p>
            </div>
          </div>
        );
      })}
    </div>

    /*<div className="card-container">
      <div>
        <div>
          <h2>Card Title</h2>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_960_720.jpg"
          alt=""
        />
        <div>
          <p>Card desc</p>
        </div>
      </div>
  </div>*/
  );
};

export default Cards;
