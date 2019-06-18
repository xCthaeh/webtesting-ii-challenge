import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

it("renders without crashing", () => {
  render(<Display />);
});
