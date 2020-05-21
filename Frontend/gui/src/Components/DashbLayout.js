import React from "react";
import { Layout } from "antd";

import SiderLayout from "../Parts/Sider";

// const { Header, Content, Footer, Sider } = Layout;
// const { Content, Sider } = Layout;
class DashLayout extends React.Component {
  render() {
    return (
      <Layout>
        <SiderLayout />
      </Layout>
    );
  }
}
export default DashLayout;
