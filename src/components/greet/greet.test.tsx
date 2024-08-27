import { act, screen, render } from "@testing-library/react";
import Greet from "./Greet";

// test(name, function, timeOut(optional))

test("Greet reders correctly", () => {
	render(<Greet />);
	const textElement = screen.getByText(/hello/i); // i indicates ignore
	expect(textElement).toBeInTheDocument();
});

test("Greet reders with a name", () => {
	render(<Greet name='praneeth' />);
	const textElement = screen.getByText(/hello praneeth/i); // i indicates ignore
	expect(textElement).toBeInTheDocument();
});
