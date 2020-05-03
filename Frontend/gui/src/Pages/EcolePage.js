import React from "react";

class EcolePage  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "admin",
    };
  }
  render(){
      return(
          <div>
              Ecole Page
          </div>
      );
  }
}

export default EcolePage;