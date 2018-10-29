import React from "react";
import Travel from "./Travel"

const travels = [
  {
    destination:"Lisbonne",
    country: "Portugal",
    distance: "453km",
    image: "https://madeinmarseille.net/actualites-marseille/2016/10/tramway-lisbonne-tourisme-visite.jpg"
  },
  {
    destination:"Namur",
    country: "Belgique",
    distance: "453km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/01-Namur-290305_%283%29_JPG.jpg/1200px-01-Namur-290305_%283%29_JPG.jpg"
  },
  {
    destination:"New York",
    country: "Amerique",
    distance: "453km",
    image: "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200"
  },
  {
    destination:"Calcuta",
    country: "Inde",
    distance: "453km",
    image: "https://static.vix.com/es/sites/default/files/styles/large/public/imj/nuestrorumbo/C/Calcuta-capital-cultural-de-la-India-4.jpg?itok=6TWr2luI"
  },
  {
    destination:"Amsterdam",
    country: "Pays-Bas",
    distance: "453km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/1200px-KeizersgrachtReguliersgrachtAmsterdam.jpg"
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel destination={travel.destination} country={travel.country} distance={travel.distance} image={travel.image}  />
  ))}
  </div>
);

export default Travels;
