import { useProductContext } from "./useProductContext"
import { formatCondition, } from "@utils/formatter";

const ProductCondition = () => {
  const product = useProductContext();
  return (
    <small>
      {" "}
      {formatCondition(product.condition)} - {product.sold_quantity} vendido
      {product.sold_quantity > 1 ? "s" : ""}
    </small>
  );
};

export default ProductCondition;
