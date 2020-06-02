import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";

import {
  BookOutlined,
  UserOutlined,
  TeamOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

// const { SubMenu } = Menu;
const { Sider } = Layout;

class SiderLayout extends React.Component {
  render() {
    return (
      <Sider>
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/admin/dashboard/profPanel">Professeurs</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            <Link to="/admin/dashboard/etudPanel">Etudiants</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BookOutlined />}>
            <Link to="/admin/dashboard/courPanel">Cours</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<VideoCameraOutlined />}>
            <Link to="/admin/dashboard/eventPanel">Evenements</Link>
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
