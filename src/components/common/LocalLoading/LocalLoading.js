import React from "react";

import { Wrapper, InnerWrapper, Bar } from "./styles";

function LocalLoading() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Bar />
        <Bar />
        <Bar />
        <Bar />
      </InnerWrapper>
    </Wrapper>
  );
}

export default LocalLoading;
