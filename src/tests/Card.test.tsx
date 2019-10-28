import React from "react";
import ReactDOM from "react-dom";
import {Card} from "../components/Card";
import {shallow, mount} from "enzyme";

// Unit
describe("Card", () => {
  it("renders without crashing", () => {
    shallow(<Card secretId={0} secret="" date="" likes={0} />);
  });

  it("Changes state when I press 'Like'", () => {
    const wrapper = shallow(
      <Card secretId={0} secret="" date="" likes={0} />
    );

    wrapper.find(".card__like").simulate("click");
    expect(wrapper.find(".card__like").hasClass("liked")).toBe(true);
  });
});
