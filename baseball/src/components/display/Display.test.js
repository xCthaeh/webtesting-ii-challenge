import React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import Display from "./Display";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Display />);
});

describe("The Display component", () => {
  it("displays balls", () => {
    const component = render(<Display strikes={2} balls={1} fouls={2} />);
    const button = component.getByTestId("Balls");
    expect(button).toHaveTextContent(/1 Balls/i);
  });
});
