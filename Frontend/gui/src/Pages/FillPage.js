import React from "react";

class FillPage  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "admin",
    };
  }
  render(){
      return(
          <div>
              fill panel
          </div>
      );
  }
}

export default FillPage;