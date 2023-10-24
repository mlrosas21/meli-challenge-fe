import { useContext } from "react";
import { ProductContext } from "./Product";

export function useProductContext() {
  const product = useContext(ProductContext);
  if (!product) {
    throw new Error("useProductContext must be used within a ProductDetails provider");
  }
  return product;
}
