import React from "react";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      color: "#000",
    };
  }

  render() {
    return <div>Contact page</div>;
  }
}

export default ContactPage;
