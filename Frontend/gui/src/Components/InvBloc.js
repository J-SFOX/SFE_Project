import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
class InvBloc extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Jumbotron className="Bl-bg">
        <h1>vous êtes de l'Ecole Superieure de Technologie</h1>
        <p>
          Entrer pour avoir 'acces aux cours ou donner de cours si vous etes
          membres de l'EST
        </p>
        <p>
          <Button className="Gr-btn" href="/Etudier">
            Aller Connecter
          </Button>
        </p>
      </Jumbotron>
    );
  }
}

export default InvBloc;
