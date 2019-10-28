import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import renderer from "react-test-renderer";
import {shallow, mount} from "enzyme";

// Unit
describe("App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("Matches the snapshot", () => {
    const output = renderer.create(<App />);
    expect(output).toMatchSnapshot();
  });

// Integration
  it("Opens an 'About' modal when I click 'About'", () => {
    const wrapper = mount(<App />);
    wrapper.find("div.nav__link").at(0).simulate("click");
    expect(wrapper.find(".about-modal").hasClass("visible")).toBe(true);
  });

  it("Opens an 'Share' modal when I click 'Share'", () => {
    const wrapper = mount(<App />);
    wrapper.find("div.nav__link").at(1).simulate("click");
    expect(wrapper.find(".share-modal").hasClass("visible")).toBe(true);
  });

  it("Closes a modal when I click 'Share'", () => {
    const wrapper = mount(<App />);
    wrapper.find("div.nav__link").at(0).simulate("click");
    expect(wrapper.find(".about-modal").hasClass("visible")).toBe(true);

    wrapper.find(".modal__close").at(0).simulate("click");
    expect(wrapper.find(".about-modal").hasClass("visible")).toBe(false);
  });
});
