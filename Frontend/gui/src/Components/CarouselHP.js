import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Directeur from "../Assets/Images/Directeur.jpg";
import Essaouira from "../Assets/Images/Essaouria.jpg";
import GroupeE from "../Assets/Images/Groupe_etudiant.jpg";

class CarouselHP extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={GroupeE}
              alt="First slide"
              height="490"
            />
            <Carousel.Caption>
              <h3>Ensemble</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Essaouira}
              alt="Third slide"
              height="490"
              
            />

            <Carousel.Caption>
              <h3>Essaouira</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Directeur}
              alt="Third slide"
              height="490"
            />

            <Carousel.Caption>
              <h3>Conferences</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    );
  }
}

export default CarouselHP;
