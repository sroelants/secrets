import React from "react";
import ReactDOM from "react-dom";
import {Header} from "../components/Header";
import {shallow, mount} from "enzyme";

// Unit
describe("Header", () => {
  it("renders without crashing", () =>{
    shallow(<Header clickHandler={() => {}} />);
  });
});
