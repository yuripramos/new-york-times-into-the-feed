import React from "react";
import { mount } from "enzyme";

import {
  translate,
  bootstrap,
  withI18n,
  setUnit,
  getUnit,
  setTranslations,
  isUS,
  isSI
} from "./index";

jest.mock("../constants", () => ({
  SI: "si"
}));

jest.mock("../../../i18n/us.json", () => ({
  SOMETHING: "alguma coisa"
}));

describe("i18n", () => {
  beforeEach(async () => {
    setUnit("si");
    await bootstrap();
  });


  describe("setTranslations", () => {
    it("Should set the translations data", () => {
      const translations = { TEMPERATURE: "°c" };

      expect(setTranslations(translations)).toEqual(translations);
    });
  });

  describe("getUnit", () => {
    it("Should return the current unit", () => {
      setUnit("us");
      const currentUnit = getUnit();

      expect(currentUnit).toEqual("us");
    });
  });

  describe("isSi", () => {
    it("Should return true if unit is si", () => {
      setUnit("si");
      expect(isSI()).toEqual(true);
    });

    it("Should return false if unit is not si", () => {
      setUnit("us");
      expect(isSI()).toEqual(false);
    });
  });
  describe("isUs", () => {
    it("Should return true if unit is us", () => {
      setUnit("us");
      expect(isUS()).toEqual(true);
    });

    it("Should return false if unit is not us", () => {
      setUnit("si");
      expect(isUS()).toEqual(false);
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
            unit: "us"
        }).then(returnedUnit => {
          expect(returnedUnit).toBe("us");
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
