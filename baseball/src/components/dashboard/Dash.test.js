import React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import Dash from "./Dash";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Dash />);
});

describe("The Dash component", () => {
  it("contains a strike button", () => {
    const component = render(<Dash />);
    const button = component.getByTestId("Strike");
    expect(button).toHaveTextContent(/Strike/i);
  });
});
