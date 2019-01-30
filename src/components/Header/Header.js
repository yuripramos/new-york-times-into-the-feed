import React, { Component } from "react";
import { shape, func, string, bool } from "prop-types";
import { MODAL_TYPES } from "../common/Modal/Modal";

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
    if(this._isMounted) {
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

    if (isError) {
      setTimeout(() => {
        openModal({
          title: "We are sorry but we were unable to service your request",
          type: MODAL_TYPES.DEFAULT,
          icon: "attention",
          description: ["Try be more more specific e.g. Brussels, Belgium", "If the error persist try again in 5 minutes"],
          onClose: () => {
            clearError();
            return closeModal()
          }
        });
      },300);
    }

    return (
      <HeaderWrapper>
        <Container>
          <Row>
            <Column>
              <TitleWrapper>
                <Title>Forecast App</Title>
              </TitleWrapper>
            </Column>
          </Row>
          <Row>
            <Column>
              <InputWrapper>
                <Input
                  onChange={handleUserInput}
                  value={search.city}
                  placeholder={
                    "city, country to forecast =)"
                  }
                  height={40}
                  width={100}
                  type="text"
                  name="city"
                />
                <Button
                  width={"80"}
                  to={{
                    pathname: "/forecast",
                    search: `?search=${search.city}`
                  }}
                  onClick={this.handleConfirmButton}
                  loading={isLoading}
                >
                  SEARCH
                </Button>
              </InputWrapper>
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
