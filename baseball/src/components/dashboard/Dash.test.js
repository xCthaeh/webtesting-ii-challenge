import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import Dash from "./Dash";

it("renders without crashing", () => {
  render(<Dash />);
});
