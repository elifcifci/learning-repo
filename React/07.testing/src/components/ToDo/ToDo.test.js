import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useEvent from "@testing-library/user-event";

import ToDo from "./index";

describe("ToDo tests", () => {
  let button, input;

  beforeEach(() => {
    render(<ToDo />);
    button = screen.getByText("Add");
    input = screen.getByLabelText("Text:");
  });

  test("The objects given by default need to be rendered", () => {
    const items = screen.getAllByText(/Item/i);
    expect(items.length).toEqual(3);
  });

  test("input and button should be in document", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("When the button is pressed, the input should be added to the list.", () => {
    const name = "Elif";
    userEvent.type(input, name);

    userEvent.click(button);
    expect(screen.getByText(name)).toBeInTheDocument();

});

});
