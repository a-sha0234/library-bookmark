import { render, screen } from "@testing-library/react";
import Form from "../components/Form";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Header from "../components/Header";
import "@testing-library/jest-dom/extend-expect";

it("check for header", async () => {
  render(<Header />);
  const heading = screen.getByText(/Library/i);
  expect(heading).toBeInTheDocument();
});
