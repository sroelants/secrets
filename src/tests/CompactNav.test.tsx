import React from "react";
import ReactDOM from "react-dom";
import {CompactNav} from "../components/CompactNav";
import {shallow, mount} from "enzyme";

// Unit
describe("CompactNav", () => {
  it("renders without crashing", () =>{
    shallow(<CompactNav clickHandler={() => {}} />);
  });
});
