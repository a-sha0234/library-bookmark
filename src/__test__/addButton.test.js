import { render, screen, waitFor } from "@testing-library/react";
import Form from "../components/Form";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Header from "../components/Header";
import "@testing-library/jest-dom/extend-expect";
import AddButton from "../components/AddButton";

describe("add button", () => {
  it("check if add button exists", () => {
    render(<AddButton />);
    const button = screen.getByRole("button", { name: /Add Book/i });
    expect(button).toBeInTheDocument();
  });

  it("check if when add is clicked, the form renders", async () => {
    render(<AddButton />);
    const button = screen.getByRole("button", { name: /Add Book/i });
    userEvent.click(button);
    

    await waitFor(() => {
      expect(
        screen.getByText("Author", "Book name", "Number of pages")
      ).toBeInTheDocument();
    });
  });
});
