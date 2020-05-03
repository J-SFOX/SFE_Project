import React from "react";

class LearnPage  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "admin",
    };
  }
  render(){
      return(
          <div>
                Learn panel
          </div>
      );
  }
}

export default LearnPage;