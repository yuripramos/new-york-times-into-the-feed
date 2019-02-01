import React from "react";
import { storiesOf } from "@storybook/react"; // eslint-disable-line
import { withInfo } from "@storybook/addon-info"; // eslint-disable-line

import SidebarMenu from "./SidebarMenu";

storiesOf("common/SidebarMenu", module).add(
  "default",
  withInfo()(() => <SidebarMenu />)
);
