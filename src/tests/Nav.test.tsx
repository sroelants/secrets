import React from "react";
import ReactDOM from "react-dom";
import {Nav} from "../components/Nav";
import {shallow, mount} from "enzyme";

// Unit
describe("Nav", () => {
  it("renders without crashing", () => {
    shallow(<Nav stickyNav={false} clickHandler={() => {}} />);
  });
});

