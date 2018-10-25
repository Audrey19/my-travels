import React from "react";

const Travel = props => (
  <figure>
    <img src={props.photo} alt={props.country} />
    <figcaption>
      <p>{props.destination}</p>
      <p>{props.country}</p>
      <p>{props.distance}</p>
    </figcaption>
  </figure>
  );

  export default Travel;
