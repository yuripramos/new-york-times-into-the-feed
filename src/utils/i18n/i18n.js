import React, { Component } from "react";
import { SI } from "../constants";

let data = {};
let unit;

export const INITIAL_UNIT = SI;

export function setTranslations(translations) {
  data = translations;
  return data;
}

export function setUnit(u) {
  unit = u;
  sessionStorage.setItem("preferredUnits", u);

  return unit;
}

export function getUnit() {
  return unit;
}

export function isUS() {
  return unit === "us";
}

export function isSI() {
  return unit === "si";
}


export async function bootstrap(unit = SI) {
  setUnit(unit);

  const i18nStatus = await require(`../../../i18n/${unit}.json`);

  return setTranslations(i18nStatus);
}

export function translate(name) {
  return data[name];
}

export const withI18n = WrappedComponent => {
  class I18nWrapper extends Component {
    constructor(props) {
      super(props);

      this.state = {
        done: false
      };
    }

    setUnit(unit = INITIAL_UNIT) {
      setUnit(unit);
      this.setState({ done: false });

      return bootstrap(unit);
    }

    async componentDidMount() {
      const self = this;
      this.unlistenUnit = this.props.subscribe(async function(state) {
        const unitProp =
          state.unit
            ? state.unit
            : INITIAL_UNIT;
        if (unitProp !== getUnit()) {
          await self.setUnit(unitProp);
          self.setState({ done: true });

          return unitProp;
        }
      });

      await this.setUnit();
      this.setState({ done: true });
    }

    async componentWillUnmount() {
      this.unlistenUnit();
    }

    render() {
      if (!this.state.done) {
        return null;
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  return I18nWrapper;
};
