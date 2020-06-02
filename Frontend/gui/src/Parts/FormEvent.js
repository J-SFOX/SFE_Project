import React from "react";
import axios from "axios";
import { Form, Input, Button, Layout } from "antd";

// import { UploadOutlined } from "@ant-design/icons";
// import { message, Upload } from "antd";

const { Content } = Layout;

class CustomEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: "",
      version: "",
      club: "",
      desc: "",
      selectedImage: null,
    };
    //   video: null,
  }

  handleTitreChange = (event) => {
    this.setState({
      titre: event.target.value,
    });
  };
  handleVersionChange = (event) => {
    this.setState({
      version: event.target.value,
    });
  };
  handleClubChange = (event) => {
    this.setState({
      club: event.target.value,
    });
  };
  handleDescChange = (event) => {
    this.setState({
      desc: event.target.value,
    });
  };
  async handleImageChange(event) {
    // this.setState({
    //   selectedImage: event.target.files[0],
    // });
    let img = event.target.files[0];
    await this.setState({
      selectedImage: img,
    });
    console.log(this.state.selectedImage);
  }
  //submit method
  handleSubmit = (event, requestType, eventID) => {
    try {
      event.preventDefault();
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const Data = new FormData();

      Data.append("Titre_E", this.state.titre);
      Data.append("Version_E", this.state.version);
      Data.append("Club_E", this.state.club.toLowerCase());
      Data.append("Desc_E", this.state.desc.toLowerCase());
      Data.append(
        "Image_E",
        this.state.selectedImage,
        this.state.selectedImage.name
      );

      switch (requestType) {
        case "post":
          return axios
            .post("http://127.0.0.1:8000/api/evenements/", Data, config)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => console.error(err));
        case "put":
          return axios
            .put(
              `http://127.0.0.1:8000/api/evenements/${eventID}/`,
              Data,
              config
            )
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
            this.handleSubmit(event, this.props.requestType, this.props.eventID)
          }
        >
          <Form.Item label="Titre Evenement">
            <Input
              name="titre"
              onChange={this.handleTitreChange}
              placeholder="Entrer le titre"
            />
          </Form.Item>
          <Form.Item label="Version">
            <Input
              name="version"
              onChange={this.handleVersionChange}
              placeholder="Entrer l'annee de l'evenement"
            />
          </Form.Item>
          <Form.Item label="Club organisateur">
            <Input
              name="club"
              onChange={this.handleClubChange}
              placeholder="Entrer le Club organisateur"
            />
          </Form.Item>
          <Form.Item label="Description">
            <Input
              name="club"
              onChange={this.handleDescChange}
              placeholder="Entrer une description sur l'evenement"
            />
          </Form.Item>
          <Form.Item>
            <input
              type="file"
              name="image"
              onChange={(e) => this.handleImageChange(e)}
            />
          </Form.Item>

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
export default CustomEventForm;
