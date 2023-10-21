import { describe, test, expect, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import Breadcrumbs from "@components/Breadcrumbs/Breadcrumbs";
import { BrowserRouter } from "react-router-dom";

describe("Breadcrumbs", () => {
  const categories = ["Category1", "Category2", "Category3"];

  beforeAll(() => {
    render(
      <BrowserRouter>
        <Breadcrumbs categories={categories} />
      </BrowserRouter>
    );
  });

  test("Should render categories joined by '>'", () => {
    expect(screen.getByText("Category1 > Category2 > Category3"));
  });
});
