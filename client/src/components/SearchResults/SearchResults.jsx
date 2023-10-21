import "./SearchResults.scss";

import SearchItem from "./SearchItem/SearchItem";
import Breadcrumbs from "@components/Breadcrumbs/Breadcrumbs";

function SearchResults({data}) {
  return (
    data && (
      <div className="container">
        <Breadcrumbs
          categories={data.categories}
        />
        <ul className="itemsList">
          {data.items.length > 0 &&
            data.items.map((item) => (
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
