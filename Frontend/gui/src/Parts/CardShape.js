import React from "react";
import { Card, Button } from "react-bootstrap";

function PCard(props) {
  return (
    <Card style={{ width: "18rem" }} className="shadow">
      <Card.Img variant="bottom" src={props.urli} />
      <Card.Body>
        <Card.Title className="Bl-tit">{props.titre}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button className="Bl-btn" href={props.bhref}>
          {props.tit_btn}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PCard;
