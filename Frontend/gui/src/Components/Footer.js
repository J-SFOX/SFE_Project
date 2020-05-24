import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-5">
      <Jumbotron className="h-400 Gr-ftr-bg Ftr-marg-0 p-b-5">
        <Row
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            fontKerning: "inheret",
          }}
          className="justify-content-around mb-25"
        >
          Site Officiel de l'Ecole Superieur de Technologie
        </Row>
        <Row className="justify-content-between">
          <Col style={{ textAlign: "center" }}>
            <div>
              <h4 className="Bl" style={{ fontWeight: "bold" }}>
                E-Learning
              </h4>
              <p>Espace Etudiant / Professeur</p>
              <p>Ajouter les cours pour les etudiants</p>
              <p>Telecharger les Cours facilement</p>
              <p>Cours en Video / Pdf / Word Support </p>
            </div>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <div>
              <h4 className="Bl" style={{ fontWeight: "bold" }}>
                Orientation
              </h4>
              <p>Information sur l'ecole</p>
              <p>Information sur les filieres de l'ecole</p>
              <p>Information sur le system de reussite dans l'ecole</p>
              <p>Les horizons du diplom de notre ecole </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            <strong>E</strong>cole <strong>S</strong>uperieur de{" "}
            <strong>T</strong>echnologie
          </Col>
        </Row>
        <Row>{/* <Col></Col> */}</Row>
        <Row className="justify-content-between  ">
          <Col md={4} sm={12} className="p-0 w-auto">
            Designed & developed by Jemmal soufiane
          </Col>
          <Col className="justify-content-end" md={0}>
            copyright &#169; 2020
          </Col>
        </Row>
      </Jumbotron>
    </footer>
  );
}
export default Footer;
