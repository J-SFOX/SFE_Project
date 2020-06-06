import React from "react";
import axios from "axios";
import { Form, Input, Button, Checkbox, Space, Select } from "antd";

const { Option } = Select;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: "",
      nom: "",
      prenom: "",
      email: "",
      filiere: "",
      username: "",
      password: "",
      remember: false,
    };
  }
  setOwner = (value) => {
    this.setState({
      owner: value,
    });
  };

  // handling register method
  handleRegister = (
    name,
    lname,
    email,
    username,
    password,
    filiere,
    accountOwner
    // rem
  ) => {
    switch (accountOwner) {
      case "Prof":
        {
          const Data = new FormData();
          Data.append("username", username);
          Data.append("email", email);
          Data.append("password", password);
          Data.append("lname", lname);
          Data.append("fname", name);
          axios
            .post("http://127.0.0.1:8000/api/professeurs/", Data)
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => console.log(err));
          // if (rem === true) {
          //   localStorage.setItem("isAuthenticated", true);
          //   localStorage.setItem("Name", lname);
          // } else {
          //   sessionStorage.setItem("haveAccess", true);
          // }
          window.location.href = "/amprof"; //page direction
        }
        break;
      case "Etud":
        {
          const EData = new FormData();
          EData.append("E_username", username);
          EData.append("E_email", email);
          EData.append("E_password", password);
          EData.append("E_lname", lname);
          EData.append("E_fname", name);
          EData.append("E_filiere", filiere);
          axios
            .post("http://127.0.0.1:8000/api/etudiants/", EData)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
          // if (rem === true) {
          //   localStorage.setItem("isAuthenticated", true);
          //   localStorage.setItem("Name", lname);
          // } else {
          //   sessionStorage.setItem("haveAccesss", true);
          // }
          window.location.href = "/ametud"; //page direction
        }
        break;
      default:
        return console.log("nothing to do");
    }
  };

  //on finish form method

  onFinish = (values) => {
    this.setState({
      nom: values.name,
      prenom: values.lname,
      email: values.email,
      filiere: values.filiere,
      username: values.username,
      password: values.password,
      remember: values.remember,
    });

    const stt = this.state;
    this.handleRegister(
      stt.prenom,
      stt.nom,
      stt.email,
      stt.username,
      stt.password,
      stt.filiere,
      stt.owner,
      stt.remember
    );
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    return (
      <div className="form-container">
        <div className="space-align-block border border-black p-5 w-auto">
          <Space align="center">
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: false }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="Prenom"
                name="name"
                rules={[{ required: true, message: "Entrer votre prenom !" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Nom"
                name="lname"
                rules={[{ required: true, message: "Entrer votre nom !" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Entrer votre nom d'utilisateur" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Entrer votre Email !" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mot de passe"
                name="password"
                rules={[
                  { required: true, message: "Entrer votre mot de passe !" },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item name="Owner">
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Qui etes vous ?"
                  onChange={this.setOwner}
                  optionFilterProp="children"
                  //   onChange={onChange}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="Prof">Professeur</Option>
                  <Option value="Etud">Etudiant</Option>
                </Select>
              </Form.Item>
              {/* // change it to a select */}
              {this.state.owner === "Etud" ? (
                <Form.Item
                  label="Filiere"
                  name="filiere"
                  rules={[
                    {
                      required: true,
                      message: "Entrer votre nom d'utilisateur",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null}
              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Rester Connecter</Checkbox>
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  S'Enregistrer
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </div>
      </div>
    );
  }
}

export default Register;
