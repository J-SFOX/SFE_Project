import React from "react";
import "./App.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import LearnPage from "./Pages/LearnPage";
import EcolePage from "./Pages/EcolePage";
import FillPage from "./Pages/FillPage";
import ParaPage from "./Pages/ParaPage";
import AdminPage from "./Pages/AdminPage";
import DashboardPage from "./Pages/Dashboard";

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
          <Navbar className="border-bottom" bg="light" expand="lg">
            <Navbar.Brand>
              <strong className="Gr">EST</strong>
              <span className="Bl">Essaouira</span>
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/">
                  Accueil
                </Link>
                <Link className="nav-link" to="/Etudier">
                  Etudier
                </Link>
                <NavDropdown title="Information" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Information/Ecole">Ecole</NavDropdown.Item>
                  <NavDropdown.Item href="/Information/Filieres">Filieres</NavDropdown.Item>
                  <NavDropdown.Item href="/Information/Para-universitaire">
                    Para-Universitaire
                  </NavDropdown.Item>
                </NavDropdown>

                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/admin" exact render={() => <AdminPage />} />
            <Route path="/Etudier" exact render={() => <LearnPage />} />
            <Route path="/Information/Ecole" exact render={() => <EcolePage />} />
            <Route path="/Information/Filieres" exact render={() => <FillPage />} />
            <Route path="/Information/para-universitaire" exact render={() => <ParaPage />} />
            <Route path="/contact" exact render={() => <ContactPage />} />
            <Route path="/admin/dashboard" exact render={()=><DashboardPage/>}/>
          </Switch>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
