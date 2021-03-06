import React from "react";

const Travel = props => (
  <figure>
    <img src={props.image} alt={props.country} />
    <figcaption>
      <p>{props.destination}</p>
      <p>{props.country}</p>
      <p>{props.distance}</p>
    </figcaption>
  </figure>
  );

  export default Travel;
