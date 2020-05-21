import React from "react";

class ProfDesk extends React.Component {
  render() {
    if (
      localStorage.getItem("isAuthenticated") ||
      sessionStorage.getItem("haveAccess")
    ) {
      // const a = localStorage.getItem("profID");
      return <div>Welcome prof </div>;
    } else {
      window.location.href = "/login";
    }
  }
}

export default ProfDesk;
