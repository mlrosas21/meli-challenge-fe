import { useProductContext } from "./useProductContext"

const ProductDescription = () => {
  const product = useProductContext();

  return (
    <section className="description">
      <h2>Descripción del producto</h2>
      <p>{product.description}</p>
    </section>
  );
};

export default ProductDescription;
