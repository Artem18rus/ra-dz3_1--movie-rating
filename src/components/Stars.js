import React from "react";
import Star from "./Star";

function Stars({ count }) {
  return (
    <ul className="card-body-stars">
      {count > 0 && count < 6
        ? Array(count)
            .fill()
            .map((_, idx) => (
              <li key={idx}>
                <Star />
              </li>
            ))
        : null}
    </ul>
  );
}

export default Stars;

Stars.defaultProps = {
  count: "0"
};
