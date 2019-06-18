import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";
import "jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<App />);
});

describe("The baseball app", () => {
  describe("button functionality", () => {
    it("has a strike button that logs strikes", () => {
      const { getByText, getByTestId } = render(<App />);

      const button = getByText("Strike");

      fireEvent.click(button);
      const strikes = getByTestId("Strikes");

      expect(strikes).toHaveTextContent(/1 Strikes/i);
    });
  });

  it("has a foul button that logs fouls", () => {
    const { getByText, getByTestId } = render(<App />);

    const button = getByText("Foul");

    fireEvent.click(button);
    const fouls = getByTestId("Fouls");

    expect(fouls).toHaveTextContent(/1 Fouls/i);
  });

  it("has a ball button that logs balls", () => {
    const { getByText, getByTestId } = render(<App />);

    const button = getByText("Ball");

    fireEvent.click(button);
    const balls = getByTestId("Balls");

    expect(balls).toHaveTextContent(/1 Balls/i);
  });
});
