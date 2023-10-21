import { describe, test, expect, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductDetails from "@components/ProductDetails/ProductDetails";
import { BrowserRouter } from "react-router-dom";
import mockData from "@mocks/getItem.js";

describe("Product Details", () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <ProductDetails details={mockData} />
      </BrowserRouter>
    );
  });

  test("Should render data", () => {
    expect(screen.getByRole("article"));
  });

  test("Should render product info & image", () => {
    expect(screen.getByText(mockData.title));
    expect(screen.getByRole("img"));
    expect(screen.getByText(/descripción/i));
  });

  test("Should render 'Comprar' button", () =>{
    expect(screen.getByRole("button"));
  })
});
