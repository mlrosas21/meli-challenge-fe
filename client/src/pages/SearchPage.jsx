import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getItems } from "@service/items";
import SearchResults from "../components/SearchResults/SearchResults";

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
    <SearchResults data={response} />
  )
}

export default SearchPage