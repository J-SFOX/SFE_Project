import React from "react";
import axios from "axios";
import { Button, Layout } from "antd";

import { Accordion, Card } from "react-bootstrap";
import CardCour from "../Components/CardCour";

const { Content } = Layout;
class EtudBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cours: [],
      filCour: [],
      etudiant: {},
      filiere: "",
      cours1: [],
      cours2: [],
      cours3: [],
      cours4: [],
      s1notfound: false,
      s2notfound: false,
      s3notfound: false,
      s4notfound: false,
    };
  }

  componentDidMount() {
    const id = JSON.parse(localStorage.getItem("etudID"));
    this.setState({});
    // console.log(filname);
    axios.get("http://127.0.0.1:8000/api/cours/").then((res) => {
      this.setState({
        cours: res.data,
      });
      console.log("gettted");
    });
    // console.log(this.state.filCour);
    // this.getAllcour(filname);
  }
  // those function are basic am not using react filtering i should but i prefere not to do

  courGet = () => {
    const filname = localStorage.getItem("etudFil");
    const AllCours = this.state.cours;
    // console.log(AllCours.length);
    var courfilX = [];
    for (var i = 0; i < AllCours.length; i++) {
      if (AllCours[i].Filiere_C === filname) {
        courfilX.push(AllCours[i]);
        console.log(i);
      }
    }
    console.log(courfilX);
    this.setState({
      filCour: courfilX,
    });
    // this.getS1();
  };

  getS1 = () => {
    const filCour = this.state.filCour;
    const courS = [];
    for (var i = 0; i <= filCour.length - 1; i++) {
      const sem = filCour[i].Semestre;
      console.log(sem);
      if (sem === 1) {
        courS.push(filCour[i]);
      }
    }
    if (courS.length === 0) {
      this.setState({
        s1notfound: true,
      });
    } else {
      this.setState({
        cours1: courS,
      });
    }
  };
  getS2 = () => {
    const filCour = this.state.filCour;
    const courS = [];
    for (var i = 0; i <= filCour.length - 1; i++) {
      const sem = filCour[i].Semestre;
      console.log(sem);
      if (sem === 2) {
        courS.push(filCour[i]);
      }
    }
    if (courS.length === 0) {
      this.setState({
        s2notfound: true,
      });
    } else {
      this.setState({
        cours2: courS,
      });
    }
  };

  getS3 = () => {
    const filCour = this.state.filCour;
    const courS = [];
    for (var i = 0; i <= filCour.length - 1; i++) {
      const sem = filCour[i].Semestre;
      console.log(sem);
      if (sem === 3) {
        courS.push(filCour[i]);
      }
    }
    if (courS.length === 0) {
      this.setState({
        s3notfound: true,
      });
    } else {
      this.setState({
        cours3: courS,
      });
    }
  };

  getS4 = () => {
    const filCour = this.state.filCour;
    const courS = [];
    for (var i = 0; i <= filCour.length - 1; i++) {
      const sem = filCour[i].Semestre;
      console.log(sem);
      if (sem === 4) {
        courS.push(filCour[i]);
      }
    }
    if (courS.length === 0) {
      this.setState({
        s4notfound: true,
      });
    } else {
      this.setState({
        cours4: courS,
      });
    }
  };
  render() {
    if (
      localStorage.getItem("isAuthenticated") ||
      sessionStorage.getItem("haveAccess")
    ) {
      return (
        <Layout style={{ margin: "30px" }}>
          <Content>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    onClick={this.courGet}
                    variant="link"
                    eventKey="5"
                  >
                    Mes Cours
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            onClick={this.getS1}
                            variant="link"
                            eventKey="0"
                          >
                            Cours S1
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            {this.state.s1notfound ? (
                              <p style={{ textAlign: "center" }}>
                                Pas de cours encore
                              </p>
                            ) : (
                              <CardCour data={this.state.cours1} />
                            )}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            onClick={this.getS2}
                            variant="link"
                            eventKey="1"
                          >
                            Cours S2
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            {this.state.s2notfound ? (
                              <p style={{ textAlign: "center" }}>
                                Pas de cours encore
                              </p>
                            ) : (
                              <CardCour data={this.state.cours2} />
                            )}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            onClick={this.getS3}
                            variant="link"
                            eventKey="2"
                          >
                            Cours S3
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            {this.state.s3notfound ? (
                              <p style={{ textAlign: "center" }}>
                                Pas de cours encore
                              </p>
                            ) : (
                              <CardCour data={this.state.cours3} />
                            )}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            onClick={this.getS4}
                            variant="link"
                            eventKey="3"
                          >
                            Cours S4
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            {this.state.s4notfound ? (
                              <p style={{ textAlign: "center" }}>
                                Pas de cours encore
                              </p>
                            ) : (
                              <CardCour data={this.state.cours4} />
                            )}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Content>
        </Layout>
      );
    } else {
      window.location.href = "/login";
    }
  }
}
export default EtudBook;
