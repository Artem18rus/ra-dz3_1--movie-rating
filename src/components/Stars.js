import React from "react";
import Star from "./Star";

function Stars(props) {
  let arrStars = [];

  for (let i = 0; i < props.count; i++) {
    arrStars.push(i);
  }

  return (
    <ul className="card-body-stars">
      {arrStars.map((el, idx) => (
        <li className="item-stars" key={idx}>
          <Star el={el} />
        </li>
      ))}
    </ul>
  );
}

export default Stars;

Stars.defaultProps = {
  count: "0"
};
