import React from "react";
import { Container } from "react-bootstrap";
import Fill from "../Assets/Images/fill.jpeg";
import Etudier from "../Assets/Images/learn.jpg";
import Para from "../Assets/Images/para.jpg";

import PCard from "../Parts/CardShape";

class Prescard extends React.Component {
  render() {
    return (
      <Container className="d-flex justify-content-between">
        <PCard
          urli={Etudier}
          bhref={"/Etudier"}
          text="Education a distance, Acces aux cours chez vous, Telechargement disponible   "
          titre="Etudier"
          tit_btn="Commencer &#10140;"
        />
        <PCard
          urli={Fill}
          bhref={"/Information/Filieres"}
          text="6 Filiere, plusieurs formation ,retrouver le point de depart chez nous"
          titre="Filieres"
          tit_btn="Aller a la page"
        />
        <PCard
          urli={Para}
          bhref={"/Information/Para-universitaire"}
          text="Apres vos cours, Relaxer dans les terrains avec les sports que vous aimiez"
          titre="Para-Universitaire"
          tit_btn="Aller a la page"
        />
      </Container>
    );
  }
}

export default Prescard;
