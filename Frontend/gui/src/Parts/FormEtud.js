import React from "react";
import axios from "axios";
import { Form, Input, Button, Layout } from "antd";

const { Content } = Layout;

class CustomEtudForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      email: "",
      filiere: "",
      username: "",
      password: "",
    };
  }
  handleNameChange = (event) => {
    this.setState({
      prenom: event.target.value,
    });
  };
  handleLnameChange = (event) => {
    this.setState({
      nom: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleFillChange = (event) => {
    this.setState({
      filiere: event.target.value,
    });
  };

  handleSubmit = (event, requestType, etudiantID) => {
    event.preventDefault();
    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/api/etudiants/", {
            E_fname: this.state.prenom,
            E_lname: this.state.nom,
            E_email: this.state.email,
            E_username: this.state.username,
            E_password: this.state.password,
            E_filiere: this.state.filiere.toLowerCase(),
          })
          .then((res) => console.log(res.data))
          .catch((er) => console.error(er));
      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/etudiants/${etudiantID}/`, {
            E_fname: this.state.prenom,
            E_lname: this.state.nom,
            E_email: this.state.email,
            E_username: this.state.username,
            E_password: this.state.password,
            E_filiere: this.state.filiere,
          })
          .then((res) => console.log(res))
          .catch((Err) => console.error(Err));
      default:
        return console.log("nothing to do");
    }
  };

  render() {
    return (
      <Content>
        <Form
          onSubmitCapture={(event) =>
            this.handleSubmit(
              event,
              this.props.requestType,
              this.props.etudiantID
            )
          }
        >
          <Form.Item label="Prenom">
            <Input
              name="prenom"
              onChange={this.handleNameChange}
              placeholder="Entrer le Prenom"
            />
          </Form.Item>
          <Form.Item label="Nom">
            <Input
              name="nom"
              onChange={this.handleLnameChange}
              placeholder="Entrer le Nom"
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              name="email"
              onChange={this.handleEmailChange}
              placeholder="Entrer l'Email"
            />
          </Form.Item>
          <Form.Item label="Nom d'utilisateur">
            <Input
              name="nomU"
              onChange={this.handleUsernameChange}
              placeholder="Entrer le Nom d'utilisateur"
            />
          </Form.Item>
          <Form.Item label="Mot de passe">
            <Input
              name="mdp"
              onChange={this.handlePasswordChange}
              placeholder="Entrer le Mot de passe"
            />
          </Form.Item>
          <Form.Item label="Filiere">
            <Input
              name="fill"
              onChange={this.handleFillChange}
              placeholder="Entrer la filiere"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
      </Content>
    );
  }
}
export default CustomEtudForm;
