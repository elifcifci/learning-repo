import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter Tests", () => {
  let count, increaseButton, decreaseButton;

  beforeAll(() => {
    console.log("I will work once before all.");
  });

  beforeEach(() => {
    console.log("I will work before each test.");

    render(<Counter />);

    count = screen.getByText("0");
    increaseButton = screen.getByText("Increase");
    decreaseButton = screen.getByText("Decrease");
  });

  afterAll(() => {
    console.log("I will work once after all.");
  });
  
  afterEach(() => {
    console.log("I will work once after each test.");
  });

  it("increase button", () => {
    userEvent.click(increaseButton);
    expect(count).toHaveTextContent("1");
  });

  test("decrease button", () => {
    userEvent.click(decreaseButton);
    expect(count).toHaveTextContent("-1");
  });
});
