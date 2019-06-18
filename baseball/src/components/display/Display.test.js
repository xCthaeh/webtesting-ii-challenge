import React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import Display from "./Display";

it("renders without crashing", () => {
  render(<Display />);
});
