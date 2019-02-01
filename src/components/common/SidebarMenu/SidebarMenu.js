import React, { Component } from "react";
import { func, string, bool } from "prop-types";
import { redirect } from "../../../utils/redirect";

import { ListMenuItems, Item, Span } from "./styles";
// import { translate } from "../../../utils/i18n";

class SidebarMenu extends Component {
  constructor(props) {
    super(props);

    this.redirectTo = this.redirectTo.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  redirectTo(path) {
    redirect(path);
  }

  isActive(path) {
    const { currentLocation } = this.props;
    return currentLocation.includes(path);
  }

  render() {
    return (
      <ListMenuItems>
        <Item
          data-test="Navbar_science"
          onClick={() => this.redirectTo("/science/hot")}
          active={this.isActive("/science/hot")}
        >
          <Span>science</Span>
        </Item>
        <Item
          data-test="Navbar_technology"
          onClick={() => this.redirectTo("/technology/hot")}
          active={this.isActive("/technology/hot")}
        >
          <Span>technology</Span>
        </Item>
        <Item
          data-test="Navbar_health"
          onClick={() => this.redirectTo("/health/hot")}
          active={this.isActive("/health/hot")}
        >
          <Span>health</Span>
        </Item>
        <Item
          data-test="Navbar_politics"
          onClick={() => this.redirectTo("/politics/hot")}
          active={this.isActive("/politics/hot")}
        >
          <Span>politics</Span>
        </Item>
        <Item
          onClick={() => this.redirectTo("/world/hot")}
          active={this.isActive("/world/hot")}
        >
          <Span>world</Span>
        </Item>
      </ListMenuItems>
    );
  }
}

SidebarMenu.defaultProps = {
  currentLocation: ""
};

SidebarMenu.propTypes = {
  currentLocation: string
};

export default SidebarMenu;
