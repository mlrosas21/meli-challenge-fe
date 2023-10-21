import { describe, test, expect, beforeAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@components/Header/Header";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  test("Should render logo", () => {
    expect(screen.getByAltText(/logo mercado libre/i));
  });

  test("Should render search bar", () => {
    expect(screen.getByPlaceholderText(/nunca dejes de buscar/i));
  });

  test("Should render empty search bar", () => {
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("");
  });

  test("Should change input content when typing in it", () => {
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "iPhone" } });
    expect(input.value).toBe("iPhone");
  });
});
