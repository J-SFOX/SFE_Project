import React from "react";
import axios from "axios";
import { Form, Input, Button, Layout } from "antd";

const { Content } = Layout;
class CustomProfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      email: "",
      password: "",
      username: "",
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

  handleSubmit = (event, requestType, professeurID) => {
    event.preventDefault();
    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/api/professeurs/", {
            fname: this.state.prenom,
            lname: this.state.nom,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
          })
          .then((res) => console.log(res))
          .catch((eroor) => console.error(eroor));
      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/professeurs/${professeurID}/`, {
            fname: this.state.prenom,
            lname: this.state.nom,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
          })
          .then((res) => console.log(res))
          .catch((err) => console.error(err));
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
              this.props.professeurID
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

export default CustomProfForm;
