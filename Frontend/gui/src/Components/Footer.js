import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-5">
      <Jumbotron className="h-500 Gr-ftr-bg Ftr-marg-0 p-b-5">
        <Row className="justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            <strong>E</strong>cole <strong>S</strong>uperieur de{" "}
            <strong>T</strong>echnologie
          </Col>
        </Row>
        <Row >
          {/* <Col></Col> */}
        </Row>
        <Row className="justify-content-between  ">
          <Col md={4} sm={12} className="p-0 w-auto">
              Designed & and developed by Jemmal soufiane
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

