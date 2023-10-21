import { describe, test, expect, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchResults from "@components/SearchResults/SearchResults";
import { BrowserRouter } from "react-router-dom";
import mockData from '@mocks/getItems.js'

describe("Search Results", () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <SearchResults data={mockData} />
      </BrowserRouter>
    );
  });

  test("Should render data", () => {
    expect(screen.getByRole("list"))    
    
  });
  
  test("Should render all items", () => {
    const itemCards = screen.getAllByRole('article');
    
    expect(itemCards).toHaveLength(mockData.items.length);
  })
  
  test("Should render all formatted prices", () => {
    const price = screen.queryAllByText(/\$/i);
    
    expect(price).toBeDefined()
    expect(price).toHaveLength(4);
  })
  
});
