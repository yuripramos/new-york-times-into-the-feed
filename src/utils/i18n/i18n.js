import React, { Component } from "react";
import { EN_US } from "../constants";

let data = {};
let language;

export const storedLanguage =
  sessionStorage.getItem("preferredLanguage");

export const INITIAL_LANGUAGE = EN_US;

export function setTranslations(translations) {
  data = translations;
  return data;
}


export function setLanguage(lang) {
  language = lang;
  sessionStorage.setItem("preferredLanguage", lang);

  return language;
}

export function getLanguage() {
  return language;
}

export function isEsES() {
  return language === "es-ES";
}

export function isEnUS() {
  return language === "en-US";
}

export async function bootstrap(lang = INITIAL_LANGUAGE) {
  setLanguage(lang);

  const i18nStatus = await require(`../../../i18n/${lang}.json`);

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

    setLanguage(lang = INITIAL_LANGUAGE) {
      setLanguage(lang);
      this.setState({ done: false });

      return bootstrap(lang);
    }

    async componentDidMount() {
      const self = this;
      this.unlistenLanguage = this.props.subscribe(async function(state) {
        const languageProp =
          state.userInfo && state.userInfo.preferredLanguage
            ? state.userInfo.preferredLanguage
            : INITIAL_LANGUAGE;
        if (languageProp !== getLanguage()) {
          await self.setLanguage(languageProp);
          self.setState({ done: true });

          return languageProp;
        }
      });

      await this.setLanguage();
      this.setState({ done: true });
    }

    async componentWillUnmount() {
      this.unlistenLanguage();
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
