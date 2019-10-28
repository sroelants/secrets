import React from "react";
import renderer from "react-test-renderer";
import {ShareModal} from "../components/ShareModal";
import {shallow, mount} from "enzyme";

// Unit
describe("ShareModal", () => {
  it("renders without crashing", () => {
    shallow(<ShareModal visible={true} closeHandler={() => {}} />);
  });

  it("Matches the snapshot", () => {
    const output = renderer.create(
      <ShareModal visible={true} closeHandler={() => {}} />
    );
    expect(output).toMatchSnapshot();
  });
});
