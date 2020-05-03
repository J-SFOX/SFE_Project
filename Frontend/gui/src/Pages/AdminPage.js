import React from "react";

class AdminPage  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "admin",
    };
  }
  render(){
      return(
          <div>
              Admin panel
          </div>
      );
  }
}

export default AdminPage;