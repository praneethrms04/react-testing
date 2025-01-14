import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
	test("render correctly", () => {
		render(<Application />);

		const pageHeading = screen.getByRole("heading", {
			level: 1,
		});
		expect(pageHeading).toBeInTheDocument();

		const sectionHeading = screen.getByRole("heading", {
			level: 2,
		});
		expect(sectionHeading).toBeInTheDocument();

		const nameElement = screen.getByLabelText("Name", {
			selector: "input",
		});
		expect(nameElement).toBeInTheDocument();

		const bioElement = screen.getByRole("textbox", {
			name: "Bio",
		});
		expect(bioElement).toBeInTheDocument();

		const jobLocationElement = screen.getByRole("combobox");
		expect(jobLocationElement).toBeInTheDocument();

		const termsElement = screen.getByRole("checkbox");
		expect(termsElement).toBeInTheDocument();

		const submitButtonElement = screen.getByRole("button");
		expect(submitButtonElement).toBeInTheDocument();
	});
});
