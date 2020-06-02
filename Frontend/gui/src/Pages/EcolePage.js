import React from "react";
import { Layout } from "antd";
import { Jumbotron, Image } from "react-bootstrap";
import Porte from "../Assets/Images/porte.jpg";
// import Filiere from "../Assets/Images/filiere.jpg";
import MD from "../Assets/Images/MD.jpg";

const { Content } = Layout;
class EcolePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "admin",
    };
  }
  render() {
    return (
      <Layout>
        <Content style={{ backgroundColor: "#fff" }}>
          <div className="d-flex m-5 border-left border-black ">
            <div>
              <img className="m-3" src={Porte} width={600} height={300} />
            </div>
            <div className="container">
              <p className="Titre f-black">
                EST : Ecole Superieure de Technologie
              </p>
              <p className="Sous-titre">Presentation</p>
              <p className="text-justify">
                L'Ecole Supérieure de Technologie de Essaouira ESTE est un
                établissement public d'enseignement supérieur à finalité
                professionnalisant. Elle a été créée en 2011 par le Ministère de
                l'Enseignement Supérieur, de la Formation des Cadres et de la
                Recherche Scientifique. L'ESTE est une composante de
                l'Université Cadi Ayyad. Sa vocation est de former des
                Techniciens Supérieurs polyvalents, hautement qualifiés et
                immédiatement opérationnels après leur sortie de l'Ecole en tant
                que collaborateurs d'ingénieurs et de managers. Sont admis à
                l'ESTE, les bacheliers de l'enseignement secondaire technique,
                scientifique et tertiaire. L'admission à l'Ecole se fait par une
                présélection basée sur des notes obtenues au baccalauréat.
              </p>
            </div>
          </div>
          <Jumbotron className="container  o-50"></Jumbotron>
          <div className="container border-bottom">
            <div className="Titre f-black A-center">Formations de l' ESTE</div>
            <div className="d-flex justify-content-between">
              <div className="pt-5">
                <p className="Sous-titre A-center">Formation Initiale</p>
                <div className="d-flex justify-content-between">
                  <div className=" container A-center">
                    <p className=" A-center font-weight-bold f-black color-Gr ">
                      DUT
                    </p>
                    <p>
                      La durée des études est de quatre semestres
                      universitaires. La Première Année comporte 32 semaines de
                      formation à raison de 36 heures par semaine en moyenne,
                      plus un mois de stage d'initiation en Entreprise. La
                      Deuxième Année est étalée sur 28 semaines de formation à
                      raison de 36 heures par semaine en moyenne, plus deux mois
                      de stage de fin de formation en Entreprise.
                    </p>
                  </div>
                  <div className="container A-center">
                    <p className="A-center font-weight-bold f-black color-Gr  ">
                      LP
                    </p>
                    <p>
                      La licence professionnelle à l'ESTE se propose de
                      compléter la formation des condidats ayant bac+2 possédant
                      une spécialité de base pour leur apporter les
                      connaissances technologiques transversales essentielles
                      dans un contexte de formation solide et complete .
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <p className="Sous-titre A-center">Formation Continue</p>
                <div className="d-flex justify-content-between">
                  <div className=" container A-center">
                    <p className=" A-center font-weight-bold f-black color-Gr ">
                      Master d'Universite
                    </p>
                    <p>
                      MU : Informatique de Gestion et Management des Entreprises
                      <br />
                      MU : Management et Stratégie Digitale
                    </p>
                  </div>
                  <div className="container A-center">
                    <p className="A-center font-weight-bold f-black color-Gr  ">
                      Licence Pro d'Universite
                    </p>
                    <p>
                      La licence professionnelle d'université est rattachée
                      administrativement à un établissement universitaire et il
                      est conforme à la vocation et aux missions de cet
                      établissement. Ses modules peuvent être assurés par un ou
                      plusieurs établissements universitaires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" container pb-5 border-bottom ">
            <div className="Titre f-black A-center mt-5">
              Filieres de l' ESTE
            </div>
            <div className=" mt-4 container d-flex justify-content-between">
              <div className="border-bottom">
                <p className="A-center Sous-titre">DUT en </p>
                <p>
                  <span className="Bl"> &#8227;</span> Génie Informatique
                </p>
                <p>
                  <span className="Bl"> &#8227;</span> Energies Renouvelables
                </p>
                <p>
                  <span className="Bl"> &#8227;</span> Techniques de Management
                </p>
                <p>
                  <span className="Bl"> &#8227;</span> Gestion des Organisations
                  et des Destinations Touristiques
                </p>
                <p>
                  <span className="Bl"> &#8227;</span> Génie de l'Environnement
                </p>
                <p>
                  <span className="Bl"> &#8227;</span> Informatique
                  Décisionnelle et Science de Données
                </p>
              </div>
              <div className="border-bottom">
                <p className="A-center Sous-titre">LP en </p>
                <p>
                  <span className="Bl"> &#8227;</span> LP Management Bancaire et
                  Financier (MBF)
                </p>
                <p>
                  <span className="Bl"> &#8227;</span> LP Management du tourisme
                  (MT)
                </p>
                <p>
                  <span className="Bl"> &#8227;</span> LP Energies Renouvelables
                  et Développement Durable (ERDD)
                </p>
                <p>
                  <span className="Bl"> &#8227;</span> LP Ingénieriedes Systemes
                  Informatiques Et Logiciels (ISIL)
                </p>
                <p>
                  <span className="Bl"> &#8227;</span> LP Modélisation et
                  Gestion de l'Environnement (MGE)
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between container mt-4">
              <div>
                <p className="A-center Sous-titre">LPU en </p>
                <p>
                  <span className="Bl"> &#8227;</span> LPU : Management et
                  Marketing du Tourisme
                </p>
              </div>
              <div>
                <p className="A-center Sous-titre">MU en </p>
                <p>
                  <span className="Bl"> &#8227;</span> MU : Informatique de
                  Gestion et Management des Entreprises
                </p>
                <p>
                  <span className="Bl"> &#8227;</span> MU : Management et
                  Stratégie Digitale
                </p>
              </div>
            </div>
          </div>
          <Jumbotron className="container  o-50"></Jumbotron>

          <div className="container">
            <div>
              <p className="Titre A-center f-black mt-5">Mot de Directeur</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="vertical-center ">
                <Image src={MD} width={200} height={200} roundedCircle />
              </div>
              <div className="w-75pc">
                <p className="text-justify">
                  L'Ecole Supérieure de Technologie de Essaouira est l'une des
                  plus importantes EST du Maroc, fondée en 2011, offre des
                  spécialités diversifiéeset innovées en formation initiale en
                  DUT (BAC + 2) et en LP (BAC + 3) couvrant le spectre de
                  technologie dans les domaines du secondaire (Pôle ingénierie)
                  et tertiaire (Pôle Management),et des diplômes d'université,
                  Licences Professionnelles et Masters Spécialisés en formation
                  continue. L'ESTE est aussi un espace de Recherche &
                  Développement, avec son laboratoire de recherche, 2 équipes de
                  recherches regroupant les enseignants chercheurs et un nombre
                  important de doctorants. Choisir l'EST de Essaouira, c'est
                  avant tout bénéficier d'un encadrement pédagogique fort de
                  plus de 28 enseignants en poste à l'Université, appuyés par
                  plusieurs intervenants issus du monde professionnel et par une
                  équipe de plus de 14 techniciens et administratifs et de 2
                  ingenieurs. C'est aussi se donner les possibilités d'utiliser
                  du matériel technologique de pointe dans tous les domaines.
                  Ces moyens humains et techniques permettent, à travers les
                  projets qui jalonnent la recherche scientifique, les
                  formations, les activités culturelles et sportives et clubs,
                  d'acquérir le savoir-faire, l'autonomie et l'initiative
                  indispensables pour devenir le véritable professionnel
                  recherché par les entreprises. Pour une étroite collaboration
                  avec le monde socio-économique, une structuredédiée aux
                  relations extérieures et au transfert de
                  technologie,permetl’accompagnement des étudiants et des
                  lauréats pour les stages et PFE, l’insertion professionnelle
                  et l’incubation des entreprises. La formation à l’ESTE
                  représente un double intérêt pour le lauréat, un véritable
                  tremplin avec un métier déjà en main. En effet, tout lauréat
                  de l'EST de Essaouira peut aspirer à une insertion
                  professionnelle immédiate après le DUT (BAC+2), ou une
                  insertion différée d'un an après une Licence Professionnelle
                  (BAC+3), ou bien, pour les meilleurs lauréats, une poursuite
                  d'études vers un master, une école d'Ingénieurs ou de Commerce
                  (BAC+5 à BAC +8). Enfin, l'EST de Essaouira, c'est aussi une
                  ouverture vers le monde extérieur à travers de multiples
                  collaborations nationales et internationales.
                </p>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default EcolePage;
