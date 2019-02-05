import React from "react";
import { black30 } from "../../../styles/settings";
import Icon from "../Icon";
import DefaultContent from "../DefaultContent";

import { Content, Wrapper } from "./styles";

function NotFound() {
  return (
    <Wrapper>
      <DefaultContent
        data-test="NotFound"
        Icon={() => <Icon name="NotFound" color={black30} />}
        primaryText={`Page Not Found`}
        secondaryTexts={["Sorry Page Not Found"]}
      >
        <Content />
      </DefaultContent>
    </Wrapper>
  );
}

export default NotFound;
