import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Layout, Modal, Divider } from "antd";

import ProfCourForm from "../Parts/ProfCourForm";
import ProfCour from "../Components/ProfcardCour";

const { Content } = Layout;
class ProfDesk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      professeur: {},
      cours: [],
      profcours: [],
      visible: false,
    };
  }
  componentDidMount() {
    const Prf = localStorage.getItem("profID");

    axios
      .get("http://127.0.0.1:8000/api/cours/")
      .then((res) => {
        this.setState({
          cours: res.data,
        });
        console.log("getted");
        const Allcours = this.state.cours;
        var courP = [];
        for (var i = 0; i < Allcours.length; i++) {
          const profc = Allcours[i].Prof_C;
          if (profc === Prf) {
            courP.push(Allcours[i]);
            console.log(i);
          }
        }
        console.log(courP);
        this.setState({
          profcours: courP,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://127.0.0.1:8000/api/professeurs/${Prf}/`)
      .then((res) => {
        this.setState({
          professeur: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible } = this.state;
    if (
      localStorage.getItem("isAuthenticated") ||
      sessionStorage.getItem("haveAccess")
    ) {
      // const a = localStorage.getItem("profID");
      return (
        <Content style={{ margin: 40 }} className="border">
          <div className="d-flex justify-content-between p-5">
            <div>
              Bonjour professeur :
              <span style={{ fontWeight: "bold" }}>
                {this.state.professeur.lname}
              </span>
            </div>
            <div style={{ marginBlockEnd: "0px" }}>
              <Button onClick={this.showModal}>Ajouter Cours</Button>
            </div>
          </div>
          <Divider />
          <div>
            <p
              style={{ fontSize: "30px", color: "#0779e4", marginLeft: "43%" }}
            >
              Mes Cours
            </p>
            <ProfCour data={this.state.profcours} />
          </div>
          <div>
            <Modal
              style={{ paddingLeft: "0px" }}
              centered={true}
              visible={visible}
              title="Ajouteer cours"
              onCancel={this.handleCancel}
              footer={[
                <Button variant="success" onClick={this.handleCancel}>
                  Terminer
                </Button>,
              ]}
            >
              <ProfCourForm
                btnText="Ajouter"
                requestType="post"
                profID={this.state.professeur.id}
                courID={null}
              />
            </Modal>
          </div>
        </Content>
      );
    } else {
      window.location.href = "/login";
    }
  }
}

export default ProfDesk;
