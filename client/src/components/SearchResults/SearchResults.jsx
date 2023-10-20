import "./SearchResults.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getItems } from "@service/items";
import SearchItem from "./SearchItem/SearchItem";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

function SearchResults() {
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
    response && (
      <div className="container">
        <Breadcrumbs
          filters={response.filters.find((filter) => filter.id === "category")}
        />
        <ul className="itemsList">
          {response.results.length > 0 &&
            response.results.map((item) => (
              <li key={item.id}>
                {" "}
                <SearchItem item={item} />{" "}
              </li>
            ))}
        </ul>
      </div>
    )
  );
}

export default SearchResults;
