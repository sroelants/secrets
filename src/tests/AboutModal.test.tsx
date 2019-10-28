import React from "react";
import renderer from "react-test-renderer";
import {AboutModal} from "../components/AboutModal";
import {shallow, mount} from "enzyme";

// Unit
describe("AboutModal", () => {
  it("renders without crashing", () => {
    shallow(<AboutModal visible={true} closeHandler={() => {}} />);
  });

  it("Matches the snapshot", () => {
    const output = renderer.create(
      <AboutModal visible={true} closeHandler={() => {}} />
    );
    expect(output).toMatchSnapshot();
  });
});
