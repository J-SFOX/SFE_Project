import React from "react";
import axios from "axios";
import { Card, Button } from "antd";
import CustomCourForm from "../Parts/FormCour";
class CourXPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cour: {},
    };
  }
  componentDidMount() {
    try {
      const {
        match: { params },
      } = this.props;
      axios
        .get(`http://127.0.0.1:8000/api/cours/${params.courID}/`)
        .then((res) => {
          this.setState({
            cour: res.data,
          });
        });
    } catch (er) {
      console.log(er);
    }
  }
  handleDelete = () => {
    const {
      match: { params },
    } = this.props;
    axios.delete(`http://127.0.0.1:8000/api/cours/${params.courID}/`);
  };
  render() {
    return (
      <div>
        <Card title={this.state.cour.Titre_C}>
          <p>{this.state.cour.Element_C}</p>
          <p>{this.state.cour.Filiere_C}</p>
          <p>{this.state.cour.Module_C}</p>
          <p>{this.state.cour.Semestre}</p>
          <p>{this.state.cour.ProfID}</p>
          <p>
            <strong>Video :</strong>
            <a href={this.state.cour.Video_C}>Video</a>
          </p>
          <p>
            <strong>PDF :</strong>
            <a href={this.state.cour.PDF_C}>PDF</a>
          </p>
        </Card>
        <CustomCourForm
          requestType="put"
          btnText="Update"
          courID={this.props.match.params.courID}
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
export default CourXPanel;
