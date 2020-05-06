import React from "react";
import AdminLog from '../Components/adminLog';

class AdminPage  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "admin",
    };
  }
  render(){
      return(
          <div >
              <AdminLog/>
          </div>
      );
  }
}

export default AdminPage;