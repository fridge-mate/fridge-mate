// src/App.test.tsx
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { page, userEvent } from "@vitest/browser/context";

import App from "./App";

describe("App", () => {
	it("renders Vite and React logos", () => {
		render(<App />);
		expect(page.getByAltText("Vite logo")).toBeInTheDocument();
		expect(page.getByAltText("React logo")).toBeInTheDocument();
	});

	it("increments count on button click", async () => {
		const button = page.getByRole("button", { name: /count is/i });
		expect(button).toHaveTextContent("count is 0");
		await button.click();
		expect(button).toHaveTextContent("count is 1");
	});
});
