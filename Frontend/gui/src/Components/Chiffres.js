import React from "react";
import ChifCard from "../Parts/ChiffreCard";
import { Col } from "react-bootstrap";

class Chiffre extends React.Component {
  render() {
    return (
      <Col className=" mt-5 mb-5 d-flex flex-baseline flex-wrap justify-content-between">
        <ChifCard number={700} text={"Etudiants"} />
        <ChifCard number={28} text={"Professeurs"} />
        <ChifCard number={2600} text={"Laureat"} />
        <ChifCard number={6} text={"Filieres"} />
        <ChifCard number={16} text={"Doctorants-chercheurs"} />
        <ChifCard number={28} text={"Enseignants-chercheurs"} />
        <ChifCard number={6} text={"Fonctionanaires-techniciens"} />
        <ChifCard number={8} text={"Fonctionanaires-administrateurs"} />
        <ChifCard number={2} text={"Fonctionanaires-ingenieurs"} />
        <ChifCard number={1} text={"Laboratoires"} />
        <ChifCard number={17} text={"Salles-cours"} />
        <ChifCard number={7} text={"Salles-TP"} />
        <ChifCard number={2} text={"AmphiTheatres"} />
        <ChifCard number={1} text={"Bibliotheques"} />
        <ChifCard number={2} text={"Associations"} />
        <ChifCard number={8} text={"Club Etudiants"} />
      </Col>
    );
  }
}

export default Chiffre;
