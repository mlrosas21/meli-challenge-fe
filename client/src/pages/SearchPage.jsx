import { useEffect, useState, lazy } from "react";
import { useSearchParams } from "react-router-dom";
import { getItems } from "@service/items";
import { Suspense } from "react";
import Loading from "@components/Loading/Loading";

const SearchResults = lazy(() =>
  import("../components/SearchResults/SearchResults")
);

function SearchPage() {
  const [searchParams] = useSearchParams();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const query = searchParams.get("search");
    if (!query) return;

    const fetchItems = async () => {
      try {
        const res = await getItems(query);
        setResponse(res);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [searchParams]);

  return (
    <Suspense fallback={<Loading />}>
      <SearchResults data={response} />
    </Suspense>
  );
}

export default SearchPage;
