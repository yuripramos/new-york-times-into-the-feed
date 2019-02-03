import React, { Component } from "react";
import { string } from "prop-types";
import { redirect } from "../../../utils/redirect";
import Icon from "../Icon";
import { ListMenuItems, Item, Span } from "./styles";
import { translate } from "../../../utils/i18n";

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
          active={this.isActive("/science/")}
        >
          <Span>{translate("SCIENCE")}</Span>
        </Item>
        <Item
          data-test="Navbar_technology"
          onClick={() => this.redirectTo("/technology/hot")}
          active={this.isActive("/technology/")}
        >
          <Span>{translate("TECHNOLOGY")}</Span>
        </Item>
        <Item
          data-test="Navbar_health"
          onClick={() => this.redirectTo("/health/hot")}
          active={this.isActive("/health/")}
        >
          <Span>{translate("HEALTH")}</Span>
        </Item>
        <Item
          data-test="Navbar_politics"
          onClick={() => this.redirectTo("/politics/hot")}
          active={this.isActive("/politics/")}
        >
          <Span>{translate("POLITICS")}</Span>
        </Item>
        <Item
          onClick={() => this.redirectTo("/world/hot")}
          active={this.isActive("/world/")}
        >
          <Span>{translate("WORLD")}</Span>
        </Item>
        <Item
        >
          <Icon name="FlagUSA" />
          <Icon name="FlagSpain" />
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
