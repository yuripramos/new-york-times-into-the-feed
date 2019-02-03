import { INITIAL_LANGUAGE } from "../i18n";

const commonState = {
  isFilled: false,
  current: false,
  userInfo: {
    preferredLanguage: INITIAL_LANGUAGE
  },
};

export default commonState;
