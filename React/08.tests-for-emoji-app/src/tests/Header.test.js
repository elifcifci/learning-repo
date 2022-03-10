import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Header from "../Header";

describe("Header tests", () => {
  let titles, leftImages, rightImages;

  beforeEach(() => {
    render(<Header />);
  });

  test("Header title have to be in the document", () => {
    titles = screen.getAllByText("Emoji Search");
    expect(titles).toBeInTheDocument;
  });

  test("Image in left side have to be in the document", () => {
    leftImages = screen.getByAltText("left image");
    expect(leftImages).toBeInTheDocument;
  });

  test("Image in right side have to be the in document", () => {
    rightImages = screen.getByAltText("right image");
    expect(rightImages).toBeInTheDocument;
  });
});
