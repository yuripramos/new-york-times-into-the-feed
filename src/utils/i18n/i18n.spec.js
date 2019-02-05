import React from "react";
import { mount } from "enzyme";

import {
  translate,
  bootstrap,
  withI18n,
  setTranslations,
  getLanguage,
  setLanguage,
  isEnUS,
  isEsES
} from "./index";

jest.mock("../constants", () => ({
  IS_CLIENT: true,
  EN_US: "en-US"
}));

jest.mock("../../../i18n/en-US.json", () => ({
  SOMETHING: "alguma coisa"
}));

describe("i18n", () => {
  beforeEach(async () => {
    setLanguage("en-US");
    await bootstrap();
  });

  describe("bootstrap", () => {
    it("Should get i18n object from server", async () => {
      const response = await bootstrap();

      expect(response).toEqual({ SOMETHING: "alguma coisa" });
    });
  });

  describe("setTranslations", () => {
    it("Should set the translations data", () => {
      const translations = { INTERNET_BANKING: "Internet Banking" };

      expect(setTranslations(translations)).toEqual(translations);
    });
  });

  describe("getLanguage", () => {
    it("Should return the current language", () => {
      setLanguage("en-US");
      const currentLanguage = getLanguage();

      expect(currentLanguage).toEqual("en-US");
    });
  });

  describe("isEsES", () => {
    it("Should return true if language is es-ES", () => {
      setLanguage("es-ES");
      expect(isEsES()).toEqual(true);
    });

    it("Should return false if language is not es-ES", () => {
      setLanguage("en-US");
      expect(isEsES()).toEqual(false);
    });
  });

  describe("isEnUS", () => {
    it("Should return true if language is en-US", () => {
      setLanguage("en-US");
      expect(isEnUS()).toEqual(true);
    });

    it("Should return false if language is not en-US", () => {
      setLanguage("es-ES");
      expect(isEnUS()).toEqual(false);
    });
  });

  describe("translate", () => {
    it("Should translate based on a i18n data object if key exists", () => {
      expect(translate("SOMETHING")).toEqual("alguma coisa");
    });

    it("Shouldn't translate if key not exist", () => {
      expect(translate("SOMETHINGs")).toBeUndefined();
    });
  });

  describe("withI18n", () => {
    let subscribe;

    beforeEach(() => {
      subscribe = jest.fn();
    });

    it("Shouldn't render component if fetch isn't done", () => {
      const TestingComponent = () => <div>done</div>;

      const WithI18n = withI18n(TestingComponent);
      const Wrapped = mount(<WithI18n subscribe={subscribe} />);

      expect(Wrapped.state()).toEqual({ done: false });
      expect(Wrapped.html()).toEqual(null);
    });

    it("Should render component only if fetch is done", done => {
      const TestingComponent = () => <div>done</div>;

      const WithI18n = withI18n(TestingComponent);
      const Wrapped = mount(<WithI18n subscribe={subscribe} />);

      setImmediate(() => {
        try {
          expect(Wrapped.state()).toEqual({ done: true });
          expect(Wrapped.html()).toEqual("<div>done</div>");
        } catch (error) {
          done.fail(error);
        }
        done();
      });
    });

    it("Should set language when subscribe is triggered", done => {
      subscribe = jest.fn(callback =>
        callback({
          userInfo: {
            preferredLanguage: "es-ES"
          }
        }).then(returnedLanguage => {
          expect(returnedLanguage).toBe("es-ES");
          done();
        })
      );

      const TestingComponent = () => <div>done</div>;

      const WithI18n = withI18n(TestingComponent);
      mount(<WithI18n subscribe={subscribe} />);
    });

    it("Should not set language when subscribe is triggered and unserInfo language is falsy", done => {
      subscribe = jest.fn(callback =>
        callback({
          unserInfo: {}
        }).then(returnedLanguage => {
          expect(returnedLanguage).toBe(undefined);
          done();
        })
      );

      const TestingComponent = () => <div>done</div>;

      const WithI18n = withI18n(TestingComponent);
      mount(<WithI18n subscribe={subscribe} />);
    });

    it("Should unlisten state when unmounted", done => {
      const unmountMock = jest.fn();
      subscribe = jest.fn(() => unmountMock);

      const TestingComponent = () => <div>done</div>;

      const WithI18n = withI18n(TestingComponent);
      const Wrapped = mount(<WithI18n subscribe={subscribe} />);

      Wrapped.unmount();

      expect(unmountMock).toHaveBeenCalled();
      done();
    });
  });
});
