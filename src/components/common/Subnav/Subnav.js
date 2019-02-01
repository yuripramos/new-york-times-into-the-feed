import React, { Component } from "react";
import { string, arrayOf, shape, object, func } from "prop-types";
import {
  Wrapper,
  TabContainer,
  Tab,
  Text,
  ContextTitle,
  ArrowUp
} from "./styles";

class Subnav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUrl: ""
    };
  }

  componentWillMount() {
    this.setState({ activeUrl: this.props.history.location.pathname });

    this.historyListenner = this.props.history.listen(location => {
      this.setState({ activeUrl: location.pathname });
    });
  }

  componentWillUnmount() {
    this.historyListenner();
  }

  onClickTab(url) {
    this.props.history.push(url);
  }

  render() {
    const { tabs, contextTitle } = this.props;
    const { activeUrl } = this.state;

    return (
      <Wrapper>
        {contextTitle && <ContextTitle>{contextTitle}</ContextTitle>}
        <ArrowUp />
        <TabContainer>
          {tabs.map(tab => (
            <Tab
              key={tab.url}
              onClick={() => this.onClickTab(tab.url)}
              active={activeUrl === tab.url}
            >
              <Text>{tab.text}</Text>
            </Tab>
          ))}
        </TabContainer>
      </Wrapper>
    );
  }
}

Subnav.defaultProps = {
  tabs: [],
  contextTitle: null
};

Subnav.propTypes = {
  contextTitle: string,
  tabs: arrayOf(
    shape({
      text: string,
      url: string
    })
  ),
  history: shape({
    location: object,
    listen: func
  }).isRequired
};

export default Subnav;
