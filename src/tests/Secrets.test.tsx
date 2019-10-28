import React from "react";
import renderer from "react-test-renderer";
import {Secrets} from "../components/Secrets";
import {shallow, mount} from "enzyme";

// Unit
describe("Secrets", () => {
  it("renders without crashing", () => {
    shallow(<Secrets />);
  });

  it("Matches the snapshot", () => {
    const output = renderer.create(<Secrets />);
    expect(output).toMatchSnapshot()
  });
});

