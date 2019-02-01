import React, { Component } from "react";
import { shape, func, string, bool } from "prop-types";

import { HeaderWrapper, Title, TitleWrapper, InputWrapper } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import Button from "../common/Button";
import Input from "../common/Input";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.handleConfirmButton = this.handleConfirmButton.bind(this);
    this._isMounted = false;
  }

  async handleConfirmButton() {
    this.setState({
      isLoading: true
    });
    await this.props.forwardGeocode(this.props.search.city);
    if (this._isMounted) {
      this.setState({
        isLoading: false
      });
      this.props.clearSearch();
    }
  }
  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      handleUserInput,
      search,
      openModal,
      closeModal,
      isError,
      clearError
    } = this.props;
    const { isLoading } = this.state;

    return (
      <HeaderWrapper>
        <Container>
          <Row>
            <Column>
              <TitleWrapper>
                <Title>The Newest York Times</Title>
              </TitleWrapper>
            </Column>
          </Row>
          <Row>
            <Column>
              <InputWrapper>Description description</InputWrapper>
            </Column>
          </Row>
        </Container>
      </HeaderWrapper>
    );
  }
}

export default Header;

Header.defaultProps = {
  search: {
    city: ""
  }
};

Header.propTypes = {
  handleUserInput: func,
  clearSearch: func,
  clearError: func,
  forwardGeocode: func,
  isError: bool,
  search: shape({
    city: string
  }),
  openModal: func,
  closeModal: func
};
