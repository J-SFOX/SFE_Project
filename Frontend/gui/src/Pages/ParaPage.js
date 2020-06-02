import React from "react";
import axios from "axios";
import { Layout, List } from "antd";
import { Jumbotron, Col } from "react-bootstrap";
import PARA from "../Assets/Images/para.jpg";

const Club = [
  {
    Club: "Club Sportif",
    Description:
      "Le club sportif de l'ESTE vise à encourager les étudiants à pratiquer des activités sportives à l'este ( Organisation des événements sportifs, participation aux compétitions regionales et nationales...)",
  },
  {
    Club: "Club Solidarité",
    Description:
      "Il vise à encourager et stimuler les capacités entreprenariales des étudiants pour les inciter à la création d’entreprises",
  },
  {
    Club: "CLub MICE (Meetings Incentive Conferences & Events)",
    Description:
      "Ce club a pour objectif d'assurer la relation entre l’Université Caddy Ayyad en général, l’Ecole Supérieure de Technologie d’Essaouira en particulier et les entreprises Marocaines pour faire approcher l’étudiant du milieu professionnel et bonifier la réputation de l’école.",
  },
  {
    Club: 'CLub AMBITION TO MAKE REVOLUTION "AMR"',
    Description:
      "Le club AMR est connu par la diversité de ses événements en plusieurs domaines ( Let’s Learn, Atelier de programmation, Formation Architecture, Formation en techniques de communication, Agora, Best UCA Speaker, ESTE Debating League, Caravan AMR, Este Head Masters, Women’s Day, Ping Pong)",
  },
  {
    Club: "CLub Informatique",
    Description:
      "Le club informatique vise à developper le sens d'informatique chez les étudiants de l'ESTE par l'organisations de plusieurs manifestations (compétition nationale Spring Coding Days, formations en differents langages de programmation, partage de connaissances sur la manipulation de differents outils informatiques...) ",
  },
  {
    Club: "Club EPDD (Energies propres et développement durable",
    Description:
      "EPDD ou EPD² est un groupe des étudiants luttant contre tout ce qui menace l’environnement ou la biodiversité au sein de l'etablissement",
  },
  {
    Club: "Club 3SH",
    Description:
      "3SH est un club qui regroupe des étudiants de l'école supérieure de technologie Essaouira en collaboration avec des personnes professionnelles. Le rôle du groupe est de travailler sur des événements dont le but est non lucratif tel que la formation, la participation active et la bonne intégration au domaine social, universitaire et professionnel..",
  },
  {
    Club: "Club théâtral",
    Description:
      "The Theater Art Club (TTAC) vise à enrichir la vie culturelle chez les étudiants de l’ESTE par le théâtre qui est un art de la représentation d'un drame, une comédie ou autre.",
  },
  {
    Club: "Club Musical",
    Description:
      "Le club musical de l'ESTE represente un lieu de rencontre et d'amitié entre les différents talents musicaux de notre école",
  },
];
const { Content } = Layout;
class ParaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  async componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/evenements/")
      .then((res) => {
        this.setState({
          events: res.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    return (
      <Layout>
        <Content style={{ backgroundColor: "#fff" }}>
          <div className="d-flex m-5 border-left border-black ">
            <div>
              <img className="m-3" src={PARA} width={600} height={300} />
            </div>
            <div className="container">
              <p className="Titre f-black">
                Para-Universitaire à l'Ecole Superieure de Technologie
              </p>
              <p className="Sous-titre">Presentation</p>
              <p className="text-justify">
                A l’ ESTE, l’étudiant actif se met à l’épreuve à travers
                plusieurs activités qui ne relèvent pas de son cursus
                universitaire. Ces activités para-universitaires peuvent être
                sous plusieurs formats : conférences, compétitions, clubs
                internes à l’établissement, volontariat dans des associations
                locales, action politique…etc. Ces activités ne sont pas
                obligatoires, mais l’étudiant à l’université peut choisir d’y
                participer et d’y contribuer durant son temps libre, ceci dans
                la finalité de forger sa personnalité et apprendre de nouvelles
                choses. Peu importe la nature de l’événement ou sa forme,
                l’important en étant étudiant à l’université c’est de découvrir
                son entourage et l’écosystème dont il sera acteur un jour.
              </p>
            </div>
          </div>
          <Jumbotron className="container  o-50"></Jumbotron>
          <Col className="container ">
            <div className="Titre f-black A-center">
              Activités para-universitaires à l'ESTE
            </div>
            <div>
              <List
                itemLayout="horizontal"
                dataSource={this.state.events}
                renderItem={(item) => (
                  <List.Item
                    className="border-left mt-5"
                    extra={
                      <div className="A-center">
                        <img width={352} alt="logo" src={item.Image_E} />
                      </div>
                    }
                  >
                    <List.Item.Meta
                      title={<p className="Sous-titre ml-5">{item.Titre_E}</p>}
                      description={
                        <div className="ml-9pc">
                          <p>
                            <strong>version : </strong>
                            {item.Version_E}
                          </p>
                          <p>
                            <strong>Description : </strong>
                            {item.Desc_E}
                          </p>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Jumbotron className="container  o-50 mt-5"></Jumbotron>
          <div className="container mt-5">
            <div className="Titre f-black A-center">Clubs de l' ESTE</div>
            <div>
              <List
                itemLayout="horizontal"
                dataSource={Club}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.Club}
                      description={item.Description}
                    />
                  </List.Item>
                )}
              />
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default ParaPage;
