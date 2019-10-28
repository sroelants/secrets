import React from "react";
import renderer from "react-test-renderer";
import {StickyNav} from "../components/StickyNav";
import {shallow, mount} from "enzyme";

// Unit
describe("StickyNav", () => {
  it("renders without crashing", () => {
    shallow(<StickyNav isVisible={false} clickHandler={() => {}} />);
  });

  it("Matches the snapshot", () => {
    const output = renderer.create(
      <StickyNav isVisible={false} clickHandler={() => {}} />
    );
    expect(output).toMatchSnapshot();
  });
});

