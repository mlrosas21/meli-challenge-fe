import { useProductContext } from "./useProductContext"

const ProductImage = () => {
  const product = useProductContext();

  return <img src={product.picture} alt={product.title} />;
};

export default ProductImage