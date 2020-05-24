import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Layout } from "antd";

const { Content } = Layout;
class ProfCourForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: "",
      element: "",
      filiere: "",
      module: "",
      semestre: "",
      selectedFile: null, //pdf file to upload
      selectedVideo: null,
    };
  }
  //   onFinish = (values) => {
  //     this.setState({
  //       titre: values.titre,
  //       element: values.element,
  //       module: values.module,
  //       filiere: values.filiere,
  //       semestre: values.semestre,
  //       selectedFile: values.pdf,
  //       selectedVideo: values.video,
  //     });

  //     console.log(values.pdf);
  //   };
  handleTitreChange = (event) => {
    this.setState({
      titre: event.target.value,
    });
  };
  handleElementChange = (event) => {
    this.setState({
      element: event.target.value,
    });
  };
  handleFiliereChange = (event) => {
    this.setState({
      filiere: event.target.value,
    });
    // console.log(this.state.filiere);
  };
  handleModuleChange = (event) => {
    this.setState({
      module: event.target.value,
    });
  };
  handleSemestreChange = (event) => {
    this.setState({
      semestre: event.target.value,
    });
  };

  handlePDFChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
    // console.log(event.target.files[0]);
  };
  handleVideoChange = (event) => {
    this.setState({
      selectedVideo: event.target.files[0],
    });
    // console.log(event.target.files[0]);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  handleSubmit = (event, requestType, courID) => {
    try {
      event.preventDefault();
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const Data = new FormData();

      Data.append("Titre_C", this.state.titre);
      Data.append("Element_C", this.state.element);
      Data.append("Filiere_C", this.state.filiere.toLowerCase());
      Data.append("Module_C", this.state.module);
      Data.append("Semestre", this.state.semestre);
      Data.append("Prof_C", this.props.profID);
      Data.append(
        "PDF_C",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      Data.append(
        "Video_C",
        this.state.selectedVideo,
        this.state.selectedVideo.name
      );

      switch (requestType) {
        case "post":
          return axios
            .post("http://127.0.0.1:8000/api/cours/", Data, config)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => console.error(err));
        case "put":
          return axios
            .put(`http://127.0.0.1:8000/api/cours/${courID}/`, Data, config)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => console.error(err));
        default:
          return console.log("nothing to do");
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <Content>
        <Form
          onSubmit={(event) => {
            this.handleSubmit(event, this.props.requestType, this.props.courID);
          }}
        >
          <Form.Group>
            <Form.Label>Titre du cours</Form.Label>
            <Form.Control
              onChange={this.handleTitreChange}
              type="text"
              placeholder="Entrer le titre du cours"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Element du cours</Form.Label>
            <Form.Control
              onChange={this.handleElementChange}
              type="text"
              placeholder="Entrer l'element du cours"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Module du cours</Form.Label>
            <Form.Control
              onChange={this.handleModuleChange}
              type="text"
              placeholder="Entrer le module du cours"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Filiere du cours</Form.Label>
            <Form.Control as="select" onChange={this.handleFiliereChange}>
              <option>Choisir la filliere du cours</option>
              <option value="genie informatique">Genie Informatique</option>
              <option value="genie environement">Genie Environement</option>
              <option value="technique de management">
                Technique de management
              </option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Semestre du cours</Form.Label>
            <Form.Control
              onChange={this.handleSemestreChange}
              type="text"
              placeholder="Entrer le semestre du cours"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Support du cours (pdf,word ...)</Form.Label>
            <Form.Control
              onChange={this.handlePDFChange}
              type="file"
              placeholder="Ajouter le Support du cours"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Video du cours</Form.Label>
            <Form.Control
              onChange={this.handleVideoChange}
              type="file"
              placeholder="Ajouter le video representatif du cours"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {this.props.btnText}
          </Button>
        </Form>
      </Content>
    );
  }
}

export default ProfCourForm;
