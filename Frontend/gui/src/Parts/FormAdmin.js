import React from "react";
import { Form, Input, Button, Checkbox, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
class FormAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unm: "",
      password: "",
      error: "",
      admin: { username: "admin", password: "admin" },
      notin: true,
      errorIN: false,
    };
  }
  handleConnection = (un, pwd) => {
    const aun = this.state.admin.username;
    const apw = this.state.admin.password;
    if (aun === un && apw === pwd) {
      this.setState({
        errorIN: false,
      });
      sessionStorage.setItem("admin", true);
      window.location.href = "/admin/dashboard";
    } else {
      this.setState({
        errorIN: true,
      });
    }
  };
  onFinish = (values) => {
    const username = values.username;
    const pwd = values.password;
    // const rem = values.remember;

    this.handleConnection(username, pwd);
  };
  render() {
    return (
      <div className="form-container">
        <div className="space-align-block border border-black p-5 w-auto">
          <Space align="center">
            <Form
              name="normal_login"
              className="login-form"
              onFinish={this.onFinish}
            >
              {this.state.notin && this.state.errorIN ? (
                <p style={{ color: "#ff847c" }}>
                  Mot de passe ou nom d'utilisateur incorrect
                </p>
              ) : null}
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
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>{" "}
              </Form.Item>
            </Form>
          </Space>
        </div>
      </div>
    );
  }
}

export default FormAdmin;
