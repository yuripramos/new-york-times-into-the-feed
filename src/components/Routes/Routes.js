import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Subnav from "../../components/common/Subnav";
import Category from "../Category";
import CategoryArticleExpanded from "../Category/CategoryArticleExpanded";
import { translate } from "../../utils/i18n/i18n";

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
        text: translate("TOP_TRENDS"),
        url: "/science/hot"
      },
      {
        text: translate("ALL"),
        url: "/science/all"
      }
    ];
    const technologyTabs = [
      {
        text: translate("TOP_TRENDS"),
        url: "/technology/hot"
      },
      {
        text: translate("ALL"),
        url: "/technology/all"
      }
    ];
    const healthTabs = [
      {
        text: translate("TOP_TRENDS"),
        url: "/health/hot"
      },
      {
        text: translate("ALL"),
        url: "/health/all"
      }
    ];
    const politicsTabs = [
      {
        text: translate("TOP_TRENDS"),
        url: "/politics/hot"
      },
      {
        text: translate("ALL"),
        url: "/politics/all"
      }
    ];
    const worldTabs = [
      {
        text: translate("TOP_TRENDS"),
        url: "/world/hot"
      },
      {
        text: translate("ALL"),
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
          <Route exact path="/" component={Content} />
          <Route>
            <Switch>
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
            </Switch>
          </Route>
        </Layout>
      </Switch>
    );
  }
}

export default Routes;
