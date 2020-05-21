import React from "react";

import EtudBook from "../Pages/etudBook";
class LearnPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "admin",
    };
  }

  // this component ll take the id from the local storage
  render() {
    if (
      localStorage.getItem("isAuthenticated") ||
      sessionStorage.getItem("haveAccess")
    ) {
      return (
        <div>
          <EtudBook />
        </div>
      ); // build another component to the learn page
    } else {
      window.location.href = "/login";
    }
  }
}

export default LearnPage;
