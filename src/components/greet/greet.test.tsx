import { act, screen, render } from "@testing-library/react";
import Greet from "./Greet";

// test(name, function, timeOut(optional))
//describe("name", functions)

describe("Greet", () => {
	test("reders correctly", () => {
		render(<Greet />);
		const textElement = screen.getByText(/hello/i); // i indicates ignore
		expect(textElement).toBeInTheDocument();
	});
	describe("Greet Skipping", () => {
		test.skip("reders with a name", () => {
			render(<Greet name='praneeth' />);
			const textElement = screen.getByText(/hello praneeth/i); // i indicates ignore
			expect(textElement).toBeInTheDocument();
		});
	});
});
