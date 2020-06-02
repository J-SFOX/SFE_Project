import React from "react";
import { Layout, Modal, Form, InputNumber } from "antd";
import { Container, Accordion, Card, Button, Jumbotron } from "react-bootstrap";
import GI from "../Assets/Images/GI.jpg";
import ER from "../Assets/Images/ER.jpg";
import TM from "../Assets/Images/dut_tm.jpg";
import GODT from "../Assets/Images/dut_godt.jpg";
import Filiere from "../Assets/Images/filiere.jpg";
import Fill from "../Assets/Images/fill.jpeg";
import MGE from "../Assets/Images/lp_mge.jpg";
import ISIL from "../Assets/Images/lp_isil.jpg";
import MBF from "../Assets/Images/lp_mbf.jpg";
import MT from "../Assets/Images/lp_mt.jpg";
import ERDD from "../Assets/Images/lp_erdd.jpg";
import IDSD from "../Assets/PDFs/DUT_IDSD_ESTE.pdf";
import GE from "../Assets/PDFs/annonce_GE.pdf";
import MMT from "../Assets/PDFs/LP_MMT.pdf";
import MU from "../Assets/PDFs/MuEST.pdf";
// import CalculatorBody from "../Parts/CalculatorBody";
// import Result from "../Parts/Result";

const { Content } = Layout;
class FillPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Content style={{ backgroundColor: "#fff" }}>
          <Container>
            <div className="d-flex m-5 border-left border-black ">
              <div>
                <img className="m-3" src={Filiere} height={400} width={400} />
              </div>
              <div className="container ">
                <p className="Titre f-black text-justify">
                  Filieres de l' Ecole Superieure de Technologie Essaouira
                </p>
                <p className="Sous-titre">Presentation</p>
                <p className="text-justify">
                  L'Ecole Supérieure de Technologie de Essaouira ESTE est un
                  établissement public d'enseignement supérieur qui forme des
                  Techniciens Supérieurs polyvalents, hautement qualifiés et
                  immédiatement opérationnels , en plusieurs domaines ,
                  Informatique , Touristique, Management, Energies
                  Renouvelables...
                </p>
                <Button href="#fillinfo" variant="success">
                  Plus d'Info
                </Button>
              </div>
            </div>
            <Jumbotron
              style={{ backgroundImage: `url(${Fill})` }}
              className="container mt-100 "
            ></Jumbotron>
            <div className="">
              <p id="fillinfo" className=" A-center Titre f-black ">
                Information sur les Filieres
              </p>
            </div>
            <Accordion className="mt-5 w-75pc ml-13pc">
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className=" cursor-df "
                  style={{
                    backgroundColor: "#66910c",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  eventKey="0"
                >
                  DUT
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="container d-flex justify-content-between border-bottom pb-3 ">
                      <div className="A-center vertical-center w-25pc ">
                        <p className="Sous-titre">Genie Informatique</p>
                      </div>
                      <div className="w-75pc">
                        <p>
                          <strong className="f-black">premiere annee :</strong>{" "}
                          Tronc commun
                        </p>
                        <p>
                          <strong className="f-black">Deuxieme annee :</strong>{" "}
                          Options / Spécialisation et renforcement / Projet de
                          fin d'études / Stage en entreprise.
                        </p>
                        <p>
                          <strong>Option :</strong> Génie logiciel/Réseaux
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#b5e550",
                            borderColor: "#b5e550",
                            color: "#000",
                          }}
                          href={GI}
                        >
                          Plus d' Info
                        </Button>
                      </div>
                    </div>
                    <div className="container d-flex justify-content-between border-bottom pt-3 pb-3">
                      <div className="A-center vertical-center w-25pc">
                        <p className="Sous-titre">Energies Renouvelables</p>
                      </div>
                      <div className="w-75pc">
                        <p>
                          <strong className="f-black"> premiere annee :</strong>{" "}
                          Tronc commun
                        </p>
                        <p>
                          <strong className="f-black"> Deuxieme annee :</strong>{" "}
                          Options / Spécialisation et renforcement / Projet de
                          fin d'études / Stage en entreprise.
                        </p>
                        <p>
                          <strong>Option :</strong> Energies Renouvelables
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#b5e550",
                            borderColor: "#b5e550",
                            color: "#000",
                          }}
                          href={ER}
                        >
                          Plus d' Info
                        </Button>
                      </div>
                    </div>
                    <div className="container d-flex justify-content-between border-bottom pt-3 pb-3">
                      <div className="A-center vertical-center w-25pc">
                        <p className="Sous-titre">Techniques de Management</p>
                      </div>
                      <div className="w-75pc">
                        <p>
                          <strong className="f-black">premiere annee :</strong>{" "}
                          Tronc commun
                        </p>
                        <p>
                          <strong className="f-black">Deuxieme annee :</strong>{" "}
                          Options / Spécialisation et renforcement / Projet de
                          fin d'études / Stage en entreprise.
                        </p>
                        <p>
                          <strong>Option :</strong> Finance, Comptabilité,
                          Fiscalité (F.C.F)
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#b5e550",
                            borderColor: "#b5e550",
                            color: "#000",
                          }}
                          href={TM}
                        >
                          Plus d' Info
                        </Button>
                      </div>
                    </div>
                    <div className="container d-flex justify-content-between border-bottom pt-3 pb-3">
                      <div className="A-center vertical-center w-25pc">
                        <p className="Sous-titre ">
                          Gestion des Organisations et de Destinations
                          Touristiques
                        </p>
                      </div>
                      <div className="w-75pc">
                        <p>
                          <strong className="f-black">premiere annee :</strong>{" "}
                          Tronc commun
                        </p>
                        <p>
                          <strong className="f-black">Deuxieme annee :</strong>{" "}
                          Options / Spécialisation et renforcement / Projet de
                          fin d'études / Stage en entreprise.
                        </p>
                        <p>
                          <strong>Option :</strong> Gestion Touristique et
                          Hôtelière
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#b5e550",
                            borderColor: "#b5e550",
                            color: "#000",
                          }}
                          href={GODT}
                        >
                          Plus d' Info
                        </Button>
                      </div>
                    </div>
                    <div className="container d-flex justify-content-between border-bottom pt-3 pb-3">
                      <div className="A-center vertical-center w-25pc">
                        <p className="Sous-titre ">
                          Informatique Décisionnelle et Science de Données
                        </p>
                      </div>
                      <div className="w-75pc">
                        <p>
                          <strong className="f-black">premiere annee :</strong>{" "}
                          Tronc commun
                        </p>
                        <p>
                          <strong className="f-black">Deuxieme annee :</strong>{" "}
                          Options / Spécialisation et renforcement / Projet de
                          fin d'études / Stage en entreprise.
                        </p>
                        <p>
                          <strong>Option :</strong> Informatique et Big Data.
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#b5e550",
                            borderColor: "#b5e550",
                            color: "#000",
                          }}
                          href={IDSD}
                        >
                          Plus d' Info
                        </Button>
                      </div>
                    </div>
                    <div className="container d-flex justify-content-between border-bottom pt-3 pb-3">
                      <div className="A-center vertical-center w-25pc">
                        <p className="Sous-titre ">Génie de l'Environnement</p>
                      </div>
                      <div className="w-75pc">
                        <p>
                          <strong className="f-black">premiere annee :</strong>{" "}
                          Tronc commun
                        </p>
                        <p>
                          <strong className="f-black">Deuxieme annee :</strong>{" "}
                          Options / Spécialisation et renforcement / Projet de
                          fin d'études / Stage en entreprise.
                        </p>
                        <p>
                          <strong>Option :</strong> Gestion de l'environnement,
                          Evaluation d'impact, Traitement de pollution, gestion
                          d'entreprise environnementale,valorisation de déchets
                          et des eaux usées.
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#b5e550",
                            borderColor: "#b5e550",
                            color: "#000",
                          }}
                          href={GE}
                        >
                          Plus d' Info
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className=" cursor-df"
                  style={{
                    backgroundColor: "#66910c",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  eventKey="1"
                >
                  LP
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <div className="container d-flex justify-content-between border-bottom pt-3 pb-3">
                      <div className="A-center vertical-center w-25pc">
                        <p className="Sous-titre">
                          Management Bancaire et Financier (MBF)
                        </p>
                      </div>
                      <div className="w-75pc">
                        <p>
                          <strong>Option :</strong> Management Bancaire et
                          Financier
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#b5e550",
                            borderColor: "#b5e550",
                            color: "#000",
                          }}
                          href={MBF}
                        >
                          Plus d' Info
                        </Button>
                      </div>
                    </div>
                    <div className="container d-flex justify-content-between border-bottom pt-3 pb-3">
                      <div className="A-center vertical-center w-25pc">
                        <p className="Sous-titre">
                          Management du tourisme (MT)
                        </p>
                      </div>
                      <div className="w-75pc">
                        <p>
                          <strong>Option :</strong> LP Management du tourisme
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#b5e550",
                            borderColor: "#b5e550",
                            color: "#000",
                          }}
                          href={MT}
                        >
                          Plus d' Info
                        </Button>
                      </div>
                    </div>
                    <div className="container d-flex justify-content-between border-bottom pt-3 pb-3">
                      <div className="A-center vertical-center w-25pc">
                        <p className="Sous-titre">
                          Energies Renouvelables et Développement Durable (ERDD)
                        </p>
                      </div>
                      <div className="w-75pc">
                        <p>
                          <strong>Option :</strong> Energies Renouvelables et
                          Développement Durable
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#b5e550",
                            borderColor: "#b5e550",
                            color: "#000",
                          }}
                          href={ERDD}
                        >
                          Plus d' Info
                        </Button>
                      </div>
                    </div>
                    <div className="container d-flex justify-content-between border-bottom pt-3 pb-3">
                      <div className="A-center vertical-center w-25pc">
                        <p className="Sous-titre">
                          Ingénierie des Systemes Informatiques Et Logiciels
                          (ISIL)
                        </p>
                      </div>
                      <div className="w-75pc">
                        <p>
                          <strong>Option :</strong> Ingénieriedes Systemes
                          Informatiques Et Logiciels
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#b5e550",
                            borderColor: "#b5e550",
                            color: "#000",
                          }}
                          href={ISIL}
                        >
                          Plus d' Info
                        </Button>
                      </div>
                    </div>
                    <div className="container d-flex justify-content-between border-bottom pt-3 pb-3">
                      <div className="A-center vertical-center w-25pc">
                        <p className="Sous-titre">
                          Modélisation et Gestion de l'Environnement (MGE)
                        </p>
                      </div>
                      <div className="w-75pc">
                        <p>
                          <strong>Option :</strong> Modélisation et Gestion de
                          l'Environnement
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#b5e550",
                            borderColor: "#b5e550",
                            color: "#000",
                          }}
                          href={MGE}
                        >
                          Plus d' Info
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className=" cursor-df"
                  style={{
                    backgroundColor: "#66910c",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  eventKey="2"
                >
                  LPU
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <div className="container d-flex justify-content-between border-bottom pt-3 pb-3">
                      <div className="A-center vertical-center w-25pc">
                        <p className="Sous-titre ">
                          Management et Marketing du Tourisme
                        </p>
                      </div>
                      <div className="w-75pc">
                        <p>
                          <strong>Option :</strong> Management et Marketing du
                          Tourisme
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#b5e550",
                            borderColor: "#b5e550",
                            color: "#000",
                          }}
                          href={MMT}
                        >
                          Plus d' Info
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className=" cursor-df"
                  style={{
                    backgroundColor: "#66910c",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  eventKey="3"
                >
                  MU
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    {" "}
                    <div className="container d-flex justify-content-between border-bottom pt-3 pb-3">
                      <div className="A-center vertical-center w-25pc">
                        <p className="Sous-titre ">
                          Informatique de Gestion et Management des Entreprises
                        </p>
                      </div>
                      <div className="w-75pc">
                        <p>
                          <strong>Option :</strong> Informatique de Gestion et
                          Management des Entreprises
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#b5e550",
                            borderColor: "#b5e550",
                            color: "#000",
                          }}
                          href={MU}
                        >
                          Plus d' Info
                        </Button>
                      </div>
                    </div>
                    <div className="container d-flex justify-content-between border-bottom pt-3 pb-3">
                      <div className="A-center vertical-center w-25pc">
                        <p className="Sous-titre ">
                          Management et Stratégie Digitale
                        </p>
                      </div>
                      <div className="w-75pc">
                        <p>
                          <strong>Option :</strong> Management et Stratégie
                          Digitale
                        </p>
                        <Button
                          style={{
                            backgroundColor: "#b5e550",
                            borderColor: "#b5e550",
                            color: "#000",
                          }}
                          href={MU}
                        >
                          Plus d' Info
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Jumbotron className=" mt-50 container A-center"></Jumbotron>
            <p className="Titre A-center f-black">
              Question / Reponse sur des informations generales
            </p>
            <div className="container d-flex justify-content-between">
              <div className="w-45pc border-bottom">
                <p className="Sous-titre">
                  Combien d'annee pour chaque filieres ?
                </p>
                <p className="A-center text-justify ">
                  Pour le DUT Tout les filieres sont enseignees pendant deux
                  ans. pour les Licences sont ensignees pendant une ans . pour
                  tous les filieres et les diplomes chaque annee se compose de
                  deux semestre ,quatres modules par semestre, et les element
                  differt selon la filiere et le module .
                </p>
              </div>
              <div className="w-45pc border-bottom">
                <p className="Sous-titre">
                  Combien est la moyenne de validation ?
                </p>
                <p className="A-center text-justify">
                  Pour Notre ecole , les element sont validee si l'etudiant a eu
                  <span style={{ fontWeight: "bold" }}> 12/20</span> , pour les
                  modules sont valides si les tous les element de ce module sont
                  valide ou compensee par les elements de meme module .
                </p>
              </div>
            </div>
            <div className="container d-flex justify-content-between mt-50">
              <div className="w-45pc">
                <p className="Sous-titre">
                  quelle est la pedagogie de l'etude a ESTE ?
                </p>
                <p className="A-center text-justify">
                  Notre Ecole visent a ameliorer les competences de ses
                  etudiants ,elle utilise les
                  <span style={{ fontWeight: "bold" }}> Cours</span> comme
                  support pedagogique afin de transmettre les informations aux
                  etudiants, a cote des cours ,apres les cours on trouve des
                  <span style={{ fontWeight: "bold" }}> Activites</span> comme
                  les TPs et les TD ,en suite a la fin de chaque annee les
                  etudiants font un
                  <span style={{ fontWeight: "bold" }}> Stage</span> pour
                  appliquer les theories des cours .
                </p>
              </div>
              <div className="w-45pc">
                <p className="Sous-titre">
                  Comment calculer son moyen general ?
                </p>
                <p className="A-center text-justify">
                  Le moyen generale est compose de la somme des Semestres divise
                  par le nombre de semestres . La Moyen de semestre est calculee
                  en utilisant les Notes de chaque module. L' element prend
                  <span style={{ fontWeight: "bold" }}> 30%</span>
                  de la note de module , l'activite prend
                  <span style={{ fontWeight: "bold" }}> 20%</span> , et l'exam
                  final prend <span style={{ fontWeight: "bold" }}> 50%</span>
                  pour les stages, le stage d'initiation presente
                  <span style={{ fontWeight: "bold" }}> 20%</span> de la note de
                  Module Stage et le Stage Fin d'Etude presente
                  <span style={{ fontWeight: "bold" }}> 80%</span> .
                </p>
              </div>
            </div>
          </Container>
        </Content>
      </Layout>
    );
  }
}

export default FillPage;
