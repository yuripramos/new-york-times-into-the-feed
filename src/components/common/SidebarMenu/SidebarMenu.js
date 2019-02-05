import React, { Component } from "react";
import { string } from "prop-types";
import { redirect } from "../../../utils/redirect";

import { ListMenuItems, Item, Span } from "./styles";

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
          data-test="Navbar_politics"
          onClick={() => this.redirectTo("/politics/hot")}
          active={this.isActive("/politics/")}
        >
          <Span>Politics</Span>
        </Item>
        <Item
          onClick={() => this.redirectTo("/world/hot")}
          active={this.isActive("/world/")}
        >
          <Span>World</Span>
        </Item>
        <Item
          data-test="Navbar_technology"
          onClick={() => this.redirectTo("/technology/hot")}
          active={this.isActive("/technology/")}
        >
          <Span>Technology</Span>
        </Item>
        <Item
          data-test="Navbar_health"
          onClick={() => this.redirectTo("/health/hot")}
          active={this.isActive("/health/")}
        >
          <Span>Health</Span>
        </Item>
        <Item
          data-test="Navbar_science"
          onClick={() => this.redirectTo("/science/hot")}
          active={this.isActive("/science/")}
        >
          <Span>Science</Span>
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
