import React from "react";
import renderer from "react-test-renderer";
import {SecretTyper} from "../components/SecretTyper";
import {shallow, mount} from "enzyme";

// Unit
describe("SecretTyper", () => {
  it("renders without crashing", () => {
    shallow(<SecretTyper />);
  });

  it("Matches the snapshot", () => {
    const output = renderer.create(<SecretTyper />);
    expect(output).toMatchSnapshot();
  });
});
