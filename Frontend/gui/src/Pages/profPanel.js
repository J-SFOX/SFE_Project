import React from "react";
import axios from "axios";

import Professeur from "../Components/Prof";
import CustomProfForm from "../Parts/FormProf";

class ProfPanel extends React.Component {
  state = {
    professeurs: [],
  };
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/professeurs/")
      .then((res) => {
        this.setState({
          professeurs: res.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>
        <Professeur data={this.state.professeurs} />
        <CustomProfForm
          requestType="post"
          professeurID={null}
          btnText="Create"
        />
      </div>
    );
  }
}

export default ProfPanel;
