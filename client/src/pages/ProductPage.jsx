import { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "@service/items";
import Loading from "@components/Loading/Loading";

const Product = lazy(() =>
  import("../components/Product/Product")
);

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
    <Suspense fallback={<Loading />}>
      <Product details={itemDetails} />
    </Suspense>
  );
}

export default ProductPage;
