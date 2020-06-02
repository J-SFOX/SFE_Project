import React from "react";
import axios from "axios";
import { Card, Button } from "antd";
import CustomEventForm from "../Parts/FormEvent";

class EventXPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
    };
  }
  async componentDidMount() {
    try {
      const {
        match: { params },
      } = this.props;
      axios
        .get(`http://127.0.0.1:8000/api/evenements/${params.eventID}/`)
        .then((res) => {
          this.setState({
            event: res.data,
          });
        });
    } catch (err) {
      console.error(err);
    }
  }
  handleDelete = () => {
    const {
      match: { params },
    } = this.props;
    axios.delete(`http://127.0.0.1:8000/api/evenements/${params.eventID}/`);
    // window.location.push('/admin/dashboard');
  };

  render() {
    return (
      <div>
        <Card title={this.state.event.Titre_E}>
          <p>Intitule : {this.state.event.Titre_E}</p>
          <p>Version : {this.state.event.Version_E}</p>
          <p>Club : {this.state.event.Club_E}</p>
          <p>Description:{this.state.event.Desc_E}</p>
          <img
            src={this.state.event.Image_E}
            width={200}
            height={200}
            alt="Annonce d'evenement"
          />
        </Card>
        <CustomEventForm
          requestType="put"
          btnText="Update"
          eventID={this.props.match.params.eventID}
        />
        <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>
      </div>
    );
  }
}

export default EventXPanel;
