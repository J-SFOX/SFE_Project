import React from "react";
import axios from "axios";
import Event from "../Components/Event";
import CustomEventForm from "../Parts/FormEvent";

class EventPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  async componentDidMount() {
    await axios
      .get("http://127.0.0.1:8000/api/evenements/")
      .then((res) => {
        this.setState({
          events: res.data,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <Event data={this.state.events} />
        <CustomEventForm requestType="post" eventID={null} btnText="Create" />
      </div>
    );
  }
}

export default EventPanel;
