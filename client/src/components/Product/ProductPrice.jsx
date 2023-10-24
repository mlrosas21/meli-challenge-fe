import { useProductContext } from "./useProductContext"
import { formatMoney, formatAsTwoDigits } from "@utils/formatter";

const ProductPrice = () => {
  const product = useProductContext();

  return (
    <span className="price">
      $ {formatMoney(product.price.amount)}{" "}
      <sup className="decimals">
        {formatAsTwoDigits(product.price.decimals)}
      </sup>{" "}
    </span>
  );
};

export default ProductPrice;
