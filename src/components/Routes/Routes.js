import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Subnav from "../../components/common/Subnav";
import Category from "../Category";
import Content from "../Content";

import Layout from "../common/Layout";

const withRouteConfig = ({ tabs, contextTitle }) => Component =>
  function WrappedComponent(props) {
    return (
      <Fragment>
        {tabs && contextTitle && (
          <Subnav tabs={tabs} contextTitle={contextTitle} />
        )}
        <Component {...props} />
      </Fragment>
    );
  };

class Routes extends Component {
  render() {
    const scienceTabs = [
      {
        text: "Top Trends",
        url: "/science/hot"
      },
      {
        text: "all",
        url: "/science/all"
      }
    ];
    const technologyTabs = [
      {
        text: "Top Trends",
        url: "/technology/hot"
      },
      {
        text: "all",
        url: "/technology/all"
      }
    ];
    const healthTabs = [
      {
        text: "Top Trends",
        url: "/health/hot"
      },
      {
        text: "all",
        url: "/health/all"
      }
    ];
    const politicsTabs = [
      {
        text: "Top Trends",
        url: "/politics/hot"
      },
      {
        text: "all",
        url: "/politics/all"
      }
    ];
    const worldTabs = [
      {
        text: "Top Trends",
        url: "/world/hot"
      },
      {
        text: "all",
        url: "/world/all"
      }
    ];
    const scienceRoutes = withRouteConfig({
      tabs: scienceTabs,
      contextTitle: "science"
    });
    const technologyRoutes = withRouteConfig({
      tabs: technologyTabs,
      contextTitle: "technology"
    });
    const healthRoutes = withRouteConfig({
      tabs: healthTabs,
      contextTitle: "health"
    });
    const politicsRoutes = withRouteConfig({
      tabs: politicsTabs,
      contextTitle: "politics"
    });
    const worldRoutes = withRouteConfig({
      tabs: worldTabs,
      contextTitle: "world"
    });

    return (
      <Switch>
        <Layout>
          <Route exact path="/" component={Category} />
          <Route>
            <Switch>
              <Route path="/science/hot" render={scienceRoutes(Content)} />
              <Route path="/science/all" render={scienceRoutes(Content)} />
              <Route
                path="/technology/hot"
                render={technologyRoutes(Category)}
              />
              <Route
                path="/technology/all"
                render={technologyRoutes(Content)}
              />
              <Route path="/health/hot" render={healthRoutes(Category)} />
              <Route path="/health/all" render={healthRoutes(Content)} />
              <Route path="/politics/hot" render={politicsRoutes(Category)} />
              <Route path="/politics/all" render={politicsRoutes(Content)} />
              <Route path="/world/hot" render={worldRoutes(Category)} />
              <Route path="/world/all" render={worldRoutes(Content)} />
            </Switch>
          </Route>
        </Layout>
      </Switch>
    );
  }
}

export default Routes;
