import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EtudPanel from "../Pages/etudPanel";
import ProfPanel from "../Pages/profPanel";
import CourPanel from "../Pages/courPanel";
import ProfXPanel from "../Pages/profXPanel";
import EtudXPanel from "../Pages/etudXPanel";
import CourXPanel from "../Pages/courXPanel";
import SiderLayout from "../Parts/Sider";

// const { Header, Content, Footer, Sider } = Layout;
const { Content } = Layout;
class DashLayout extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <SiderLayout />
          <Content>
            {/* {this.props.children} */}
            <Switch>
              <Route
                path="/admin/dashboard/etudPanel"
                exact
                render={() => <EtudPanel />}
              />
              <Route
                path="/admin/dashboard/profPanel"
                exact
                render={() => <ProfPanel />}
              />
              <Route
                path="/admin/dashboard/courPanel"
                exact
                render={() => <CourPanel />}
              />
              <Route
                exact
                path="/admin/dashboard/profPanel/:professeurID"
                component={ProfXPanel}
              />
              <Route
                exact
                path="/admin/dashboard/etudPanel/:etudiantID"
                component={EtudXPanel}
              />
              <Route
                exact
                path="/admin/dashboard/courPanel/:courID"
                component={CourXPanel}
              />
            </Switch>
          </Content>
        </Layout>
      </Router>
    );
  }
}
export default DashLayout;
