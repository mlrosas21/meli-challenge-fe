import "./SearchResults.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getItems } from "@service/items";
import SearchItem from "./SearchItem/SearchItem";
import Breadcrumbs from "@components/Breadcrumbs/Breadcrumbs";

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
          categories={response.categories}
        />
        <ul className="itemsList">
          {response.items.length > 0 &&
            response.items.map((item) => (
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
