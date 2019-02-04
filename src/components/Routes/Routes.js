import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Subnav from "../../components/common/Subnav";
import Category from "../Category";
import CategoryArticleExpanded from "../Category/CategoryArticleExpanded";
import NotFound from "../common/NotFound";

import Content from "../Content";

import Layout from "../common/Layout";

const withRouteConfig = ({ tabs, contextTitle }) => Component =>
  function WrappedComponent(props) {

    return (
      <Fragment>
        {tabs && contextTitle && (
          <Subnav tabs={tabs} contextTitle={contextTitle} />
        )}
        <Component contextTitle={contextTitle} {...props} />
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
          <Route>
            <Switch>
              <Route exact path="/" component={Content} />
              <Route
                exact
                path="/science/hot"
                render={scienceRoutes(Category)}
              />
              <Route
                path="/science/hot/:idArticle"
                render={scienceRoutes(CategoryArticleExpanded)}
              />
              <Route
                exact
                path="/science/all"
                render={scienceRoutes(Category)}
              />
              <Route
                path="/science/all/:idArticle"
                render={scienceRoutes(CategoryArticleExpanded)}
              />
              <Route
                exact
                path="/technology/hot"
                render={technologyRoutes(Category)}
              />
              <Route
                path="/technology/hot/:idArticle"
                render={technologyRoutes(CategoryArticleExpanded)}
              />
              <Route
                exact
                path="/technology/all"
                render={technologyRoutes(Category)}
              />
              <Route
                path="/technology/all/:idArticle"
                render={scienceRoutes(CategoryArticleExpanded)}
              />
              <Route
                exact
                path="/health/hot"
                render={healthRoutes(Category)}
              />
              <Route
                path="/health/hot/:idArticle"
                render={scienceRoutes(CategoryArticleExpanded)}
              />
              <Route
                exact
                path="/health/all"
                render={healthRoutes(Category)}
              />
              <Route
                path="/health/all/:idArticle"
                render={scienceRoutes(CategoryArticleExpanded)}
              />
              <Route
                exact
                path="/politics/hot"
                render={politicsRoutes(Category)}
              />
              <Route
                path="/politics/hot/:idArticle"
                render={politicsRoutes(CategoryArticleExpanded)}
              />
              <Route
                exact
                path="/politics/all"
                render={politicsRoutes(Category)}
              />
              <Route
                path="/politics/all/:idArticle"
                render={politicsRoutes(CategoryArticleExpanded)}
              />
              <Route
                exact
                path="/world/hot"
                render={worldRoutes(Category)}
              />
              <Route
                path="/world/hot/:idArticle"
                render={worldRoutes(CategoryArticleExpanded)}
              />
              <Route
                exact
                path="/world/all"
                render={worldRoutes(Category)}
              />
              <Route
                path="/world/all/:idArticle"
                render={worldRoutes(CategoryArticleExpanded)}
              />
              <Route component={NotFound} />
            </Switch>
          </Route>
        </Layout>
      </Switch>
    );
  }
}

export default Routes;
