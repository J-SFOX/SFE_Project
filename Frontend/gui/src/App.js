import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Container from "react-bootstrap/Container";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Programmeur: "Soufiane Jemmal",
      societe: "EST Essaouira",
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>
              <strong>EST</strong> Essaouira
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav>
                <Link className="nav-link" to="/">
                  Accueil
                </Link>
                <Link className="nav-link" to="/">
                  Etudier
                </Link>
                <Link className="nav-link" to="/">
                  Information
                </Link>
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
