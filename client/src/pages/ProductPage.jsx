import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "@service/items";
import ProductDetails from "../components/ProductDetails/ProductDetails";

function ProductPage() {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { item } = await getItem(id);
      setItemDetails(item);
    };

    fetchData();
  }, [id]);

  return (
    <ProductDetails details={itemDetails} />
  )
}

export default ProductPage