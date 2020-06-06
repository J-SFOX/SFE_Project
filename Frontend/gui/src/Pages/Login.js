import React from "react";
import axios from "axios";
import { Form, Input, Button, Checkbox, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      professeurs: [],
      profCon: null,
      etudCon: null,
      isProfCorrect: false,
      isEtudCorrect: false,
      e_filiere: "",
      etudiants: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/professeurs/")
      .then((res) => {
        this.setState({
          professeurs: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://127.0.0.1:8000/api/etudiants/")
      .then((res) => {
        this.setState({
          etudiants: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleConnection = (username, password, remember) => {
    const profs = this.state.professeurs;
    for (var i = 0; i < profs.length; i++) {
      if (profs[i].username === username && profs[i].password === password) {
        this.setState({ isProfCorrect: true, profCon: profs[i].id });
      } else {
        console.log("sir f7alk");
      }
    }
    const etuds = this.state.etudiants;
    for (var j = 0; j < etuds.length; j++) {
      if (
        etuds[j].E_username === username &&
        etuds[j].E_password === password
      ) {
        this.setState({
          isEtudCorrect: true,
          etudCon: etuds[j].id,
          e_filiere: etuds[j].E_filiere,
        });
        console.log(this.state.e_filiere);
      } else {
        console.log("sir f7alk");
      }
    }
    // rewrite thiscode
    if (this.state.isProfCorrect) {
      if (remember) {
        localStorage.setItem("isAuthenticated", true);
      } else {
        sessionStorage.setItem("haveAccess", true);
      }
      localStorage.setItem("profID", JSON.stringify(this.state.profCon));
      window.location.href = "/amprof"; //page direction
      // console.log(this.state.profCon);
    }
    if (this.state.isEtudCorrect) {
      if (remember) {
        localStorage.setItem("isAuthenticated", true);
      } else {
        sessionStorage.setItem("haveAccess", true);
      }
      const id = this.state.etudCon;
      localStorage.setItem("etudID", JSON.stringify(id));
      localStorage.setItem("etudFil", this.state.e_filiere);
      window.location.href = "/ametud"; // page direction
      // console.log("hello etudiant");
    }
  };
  onFinish = (values) => {
    const username = values.username;
    const pwd = values.password;
    const rem = values.remember;

    this.handleConnection(username, pwd, rem);
  };

  render() {
    if (
      !localStorage.getItem("isAuthenticated") &&
      !sessionStorage.getItem("haveAccess")
    ) {
      return (
        <div className="form-container">
          <div className="space-align-block border border-black p-5 w-auto">
            <Space align="center">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: false,
                }}
                onFinish={this.onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Entrer le Nom d'utilisateur",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Entrer votre mot de passe",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Rester Connecter</Checkbox>
                  </Form.Item>

                  {/* <a className="login-form-forgot" href="">
                  Forgot password
                </a> */}
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Se Connecter
                  </Button>{" "}
                  Ou <NavLink to="/register"> s'enregistrer</NavLink>
                </Form.Item>
              </Form>
            </Space>
          </div>
        </div>
      );
    } else {
      if (localStorage.getItem("profID")) {
        window.location.href = "/amprof";
      } else {
        window.location.href = "/ametud";
      }
    }
  }
}

export default Login;
