import React from "react";
import axios from "axios";
import { Card, Button } from "antd";

import CustomEtudForm from "../Parts/FormEtud";

class EtudXPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etudiant: {},
    };
  }
  componentDidMount() {
    try {
      const {
        match: { params },
      } = this.props;
      axios
        .get(`http://127.0.0.1:8000/api/etudiants/${params.etudiantID}/`)
        .then((res) => {
          this.setState({
            etudiant: res.data,
          });
        });
    } catch (err) {
      console.error(err);
    }
  }
  handleDelete = () => {
    const {
      match: { params },
    } = this.props;
    axios.delete(`http://127.0.0.1:8000/api/etudiants/${params.etudiantID}/`);
    // window.location.push('/admin/dashboard');
  };

  render() {
    return (
      <div>
        <Card title={this.state.etudiant.E_fname}>
          <p>username : {this.state.etudiant.E_username}</p>
          <p>Nom : {this.state.etudiant.E_lname}</p>
          <p>Prenom : {this.state.etudiant.E_fname}</p>
          <p>Email : {this.state.etudiant.E_email}</p>
          <p>Filiere : {this.state.etudiant.E_filiere}</p>
        </Card>
        <CustomEtudForm
          requestType="put"
          btnText="Update"
          etudiantID={this.props.match.params.etudiantID}
        />
        <form onSubmit={this.handleDelete}>
            <Button type="danger" htmlType="submit">
                Delete
            </Button>
        </form>
      </div>
    );
  }
}
export default EtudXPanel;
