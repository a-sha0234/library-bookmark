import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Card from "../components/Card";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import AddButton from "../components/AddButton";

describe("check if props are being displayed in card", () => {
  it("check if Author name is rendered", () => {
    paragraphCheckdisplay("Tolkien");
  });

  it("check if name of book is displayed", () => {
    paragraphCheckdisplay("Lord of the rings");
  });

  it("check if number of pages is displayed", () => {
    paragraphCheckdisplay("1000");
  });
});

describe("isFinished button", () => {
  it("check if button text changes when clicked", async () => {
    render(<Card book={mockBookProp()} />);
    const button = screen.getByRole("button", { name: /Not finished/i });
    fireEvent.click(button);
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /Finished/i })
      ).toBeInTheDocument();
    });
  });
});

function mockBookProp() {
  const mockBook = {
    Author: "Tolkien",
    bookName: "Lord of the rings",
    key: 0,
    numberOfPages: "1000",
  };
  return mockBook;
}

function paragraphCheckdisplay(name) {
  render(<Card book={mockBookProp()} />);
  const paragraphElement = screen.getByText(name);
  expect(paragraphElement).toBeInTheDocument();
}
