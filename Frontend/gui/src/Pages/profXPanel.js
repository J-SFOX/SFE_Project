import React from "react";
import axios from "axios";
import { Card, Button } from "antd";

import CustomProfForm from "../Components/FormProf";

// const {Content} = Layout;
class ProfXPanel extends React.Component {
  state = {
    professeur: {}, // just one prof thats why i write {} if a list i shld write []
  };

  componentDidMount() {
    // const profID = this.props.match.params.profID;

    try {
      const {
        match: { params },
      } = this.props;
      axios
        .get(`http://127.0.0.1:8000/api/${params.professeurID}/`)
        .then((res) => {
          this.setState({
            professeur: res.data,
          });
        });
    } catch (err) {
      console.log(err);
    }
  }

//delete method

  handleDelete = () => {
    const {
      match: { params },
    } = this.props;
    axios.delete(`http://127.0.0.1:8000/api/${params.professeurID}/`);
  };

  render() {
    return (
      <div>
        <Card
          title={this.state.professeur.fname}
          // style={{ width: 300 }}
        >
          <p>username : {this.state.professeur.username}</p>
          <p>Nom : {this.state.professeur.lname}</p>
          <p>Prenom : {this.state.professeur.fname}</p>
          <p>email : {this.state.professeur.email}</p>
        </Card>

        <CustomProfForm
          requestType="put"
          professeurID={this.props.match.params.professeurID}
          btnText="Update"
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

export default ProfXPanel;
