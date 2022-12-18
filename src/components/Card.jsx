import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
  console.log(props)
  return (
    <section className="card">
      <div className="review-div-img">
        {badgeText && <span className="status">{badgeText}</span>}
        <img
          src={`images/${props.coverImg}`}
          alt="Person picture"
          className="review-img"
        />
      </div>
      <div className="review-info">
        <img
          src="https://i.imgur.com/UHphM5s.png"
          alt="star"
          className="star-img"
        />
        <p>{props.stats.rating}</p>
        <p>({props.stats.reviewCount})⋅{props.location}</p>
      </div>

      <p className="title">{props.title}</p>

      <p className="price">
        <b>From ${props.price}</b> / person
      </p>
    </section>
  );
}

// img="https://i.imgur.com/4Otc5b0.png"
// rating="5.0"
// reviewCount={6}
// country = "Mongolia"
// title = "Life Lessons with Katie Zaferes"
// price = {136}