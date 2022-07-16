import { expect, describe, it, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/svelte";
import Spinner from "./Spinner.svelte";

describe("Spinner Component", () => {
	afterEach(() => cleanup());

	it("mounts", () => {
		const { container } = render(Spinner, {});

		expect(container).toBeTruthy();
	});

	it("should have tailwind size", () => {
		const { container } = render(Spinner, {
			size: "5"
		});

		const svg = container.querySelector("svg");
		expect(svg.classList.toString()).toContain("h-5 w-5");
	});

	it("should have custom css size", () => {
		const { container } = render(Spinner, {
			size: "20px"
		});

		const svg = container.querySelector("svg");
		expect(svg.classList.toString()).toContain("h-[20px] w-[20px]");
	});
});
