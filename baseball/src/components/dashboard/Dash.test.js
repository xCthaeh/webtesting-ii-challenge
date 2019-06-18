import React from "react";
import { render } from "@testing-library/react";
import "jest-dom/extend-expect";
import Dash from "./Dash";

it("renders without crashing", () => {
  render(<Dash />);
});
