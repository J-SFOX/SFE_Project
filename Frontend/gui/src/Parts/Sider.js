import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

// const { SubMenu } = Menu;
const { Sider } = Layout;

class SiderLayout extends React.Component {
  render() {
    return (
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/admin/dashboard/profPanel">Professeurs</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/admin/dashboard/etudPanel">Etudiant</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/admin/dashboard/courPanel">Cours</Link>
          </Menu.Item>
          {/* <Menu.Item  key="4" icon={<UserOutlined />}>
              <Link to="/admin/d">Nav3</Link>
            </Menu.Item> */}
        </Menu>
      </Sider>
    );
  }
}
export default SiderLayout;
