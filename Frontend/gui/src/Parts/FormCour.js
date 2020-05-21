import React from "react";
import axios from "axios";
import { Form, Input, Button, Layout } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import { message, Upload } from "antd";

const { Content } = Layout;

class CustomCourForm extends React.Component {
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
    //   video: null,
  }

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
  };
  handleVideoChange = (event) => {
    this.setState({
      selectedVideo: event.target.files[0],
    });
  };

  //submit method
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
          onSubmitCapture={(event) =>
            this.handleSubmit(event, this.props.requestType, this.props.courID)
          }
        >
          <Form.Item label="Titre cour">
            <Input
              name="titre"
              onChange={this.handleTitreChange}
              placeholder="Entrer le titre"
            />
          </Form.Item>
          <Form.Item label="Element">
            <Input
              name="element"
              onChange={this.handleElementChange}
              placeholder="Entrer l'Element"
            />
          </Form.Item>
          <Form.Item label="Filiere">
            <Input
              name="filiere"
              onChange={this.handleFiliereChange}
              placeholder="Entrer l'Email"
            />
          </Form.Item>
          <Form.Item label="Module">
            <Input
              name="module"
              onChange={this.handleModuleChange}
              placeholder="Entrer le Module"
            />
          </Form.Item>
          <Form.Item label="Semestre">
            <Input
              name="semestre"
              onChange={this.handleSemestreChange}
              placeholder="Entrer le semestre"
            />
          </Form.Item>
          <Form.Item>
            <input
              type="file"
              name="pdf"
              onChange={(e) => this.handlePDFChange(e)}
            />
          </Form.Item>
          <Form.Item>
            <input
              type="file"
              name="video"
              onChange={(e) => this.handleVideoChange(e)}
            />
          </Form.Item>
          {/* <Form.Item>
            <input type="file" onChange={this.handleVideoChange} />
          </Form.Item> */}
          {/* file upload  */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
        {/* {this.state.selectedFile} */}
      </Content>
    );
  }
}
export default CustomCourForm;
