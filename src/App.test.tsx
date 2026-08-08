import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import { App } from "./App";

afterEach(() => {
  cleanup();
});

describe("App", () => {
  test("renders the page heading", () => {
    const { getByRole } = render(<App />);
    expect(
      getByRole("heading", { name: /OpenAI.*Hugging Face Incident Timeline/i }),
    ).toBeInTheDocument();
  });
});
