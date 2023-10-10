import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ContactForm from "../components/ContactForm";

describe("ContactForm", () => {
    test("renders a form with an input and a button with unique IDs", () => {
        render(<ContactForm />);
        const inputElement = screen.getByLabelText(/nachricht/i);
        const buttonElement = screen.getByRole("button", { name: /senden/i });
        expect(inputElement).toHaveAttribute("id");
        expect(buttonElement).toHaveAttribute("id");
        expect(inputElement.getAttribute("id")).not.toEqual(
            buttonElement.getAttribute("id")
        );
    });

    test("logs the input value when the button is clicked", () => {
        const consoleSpy = jest.spyOn(console, "log");
        render(<ContactForm />);
        const inputElement = screen.getByLabelText(/nachricht/i);
        const buttonElement = screen.getByRole("button", { name: /senden/i });
        const inputValue = "Hello World";
        userEvent.type(inputElement, inputValue);
        userEvent.click(buttonElement);
        expect(consoleSpy).toHaveBeenCalledWith(inputValue);
        consoleSpy.mockRestore();
    });
});
