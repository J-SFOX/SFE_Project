import React from "react";
import axios from "axios";
import { Card, Button, Layout, Modal } from "antd";

import ProfCourForm from "../Parts/ProfCourForm";

const { Content } = Layout;
class ProfXcour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cour: {},
      visible: false,
    };
  }
  componentDidMount() {
    try {
      const {
        match: { params },
      } = this.props;
      axios
        .get(`http://127.0.0.1:8000/api/cours/${params.courID}/`)
        .then((res) => {
          this.setState({
            cour: res.data,
          });
        });
    } catch (er) {
      console.log(er);
    }
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

  handleDelete = () => {
    const {
      match: { params },
    } = this.props;
    axios
      .delete(`http://127.0.0.1:8000/api/cours/${params.courID}/`)
      .then((window.location.href = "/amprof/"));
  };
  render() {
    const { visible } = this.state;
    const prf = localStorage.getItem("profID");
    return (
      <div>
        <Content>
          <Card title={this.state.cour.Titre_C}>
            <div className="d-flex justify-content-between">
              <div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Element :</span>{" "}
                  {this.state.cour.Element_C}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Filiere :</span>{" "}
                  {this.state.cour.Filiere_C}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Module :</span>{" "}
                  {this.state.cour.Module_C}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Semestre :</span>{" "}
                  {this.state.cour.Semestre}
                </p>
                {/* <p>
                  <span style={{ fontWeight: "bold" }}>Ajouter par :</span>{" "}
                  {prf}
                </p> */}
              </div>
              <div className="d-flex">
                <Button type="link" onClick={this.showModal}>
                  Modifier
                </Button>
                <form onSubmit={this.handleDelete}>
                  <Button type="danger" htmlType="submit">
                    Supprimer
                  </Button>
                </form>
              </div>
            </div>
          </Card>
          <Modal
            style={{ paddingLeft: "0px" }}
            centered={true}
            visible={visible}
            title="Modifier cours"
            onCancel={this.handleCancel}
            footer={[
              <Button variant="success" onClick={this.handleCancel}>
                Terminer
              </Button>,
            ]}
          >
            <ProfCourForm
              requestType="put"
              btnText="Modifier"
              courID={this.state.cour.id}
              profID={prf}
            />
          </Modal>
        </Content>
      </div>
    );
  }
}
export default ProfXcour;
