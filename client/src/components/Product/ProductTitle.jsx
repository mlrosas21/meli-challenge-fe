import { useProductContext } from "./useProductContext"

const ProductTitle = () => {
  const product = useProductContext();

  return <h1>{product.title}</h1>;
};

export default ProductTitle;
