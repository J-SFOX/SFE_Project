import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

// import DashLayout from "../Components/DashbLayout";
import EtudPanel from "../Pages/etudPanel";
import ProfPanel from "../Pages/profPanel";
import CourPanel from "../Pages/courPanel";
import ProfXPanel from "../Pages/profXPanel";
import EtudXPanel from "../Pages/etudXPanel";
import CourXPanel from "../Pages/courXPanel";
import SiderLayout from "../Parts/Sider";

const { Content, Sider } = Layout;
class DashboardPage extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
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
            <SiderLayout />
          </Sider>
          <Content>
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

export default DashboardPage;
