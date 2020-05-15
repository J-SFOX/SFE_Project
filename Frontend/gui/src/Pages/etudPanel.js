import React from "react";
import axios from "axios";
import Etudiant from "../Components/Etudiant";
import CustomEtudForm from "../Parts/FormEtud";

class EtudPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etudiants: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/etudiants/")
      .then((res) => {
        this.setState({
          etudiants: res.data,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <Etudiant data={this.state.etudiants} />
        <CustomEtudForm requestType="post" etudiantID={null} btnText="Create" />
      </div>
    );
  }
}

export default EtudPanel;
