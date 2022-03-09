import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("header tests", () => {

  // let firtImage, secondImage;

  beforeEach(() => {
    render(<Header />);
  });

  // test("first image seems in the document.", () => {
  //   // firtImage = getByAltText("first cat");
  //   // expect(firtImage).toBeInTheDocument();
  // });

  test("Emoji Search seems in the document.", () => {
   let headerText = screen.getByPlaceholderText("Emoji Search");
    expect(headerText).toBeInTheDocument();
})  

  // test("second image seems in the document.", () => {
  //   // secondImage = getByAltText("second cat");
  //   // expect(secondImage).toBeInTheDocument();
  // });


});
