import searchLogo from "@assets/search.svg";
import "./SearchBar.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const searchValue = searchParams.get("search");
    setSearchTerm(searchValue || "");
  }, [searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedSearchTerm = searchTerm?.trim();
    if (!trimmedSearchTerm || trimmedSearchTerm === "") return;
    navigate(`/items?search=${trimmedSearchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="searchBar"
        placeholder="Nunca dejes de buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>
        <img src={searchLogo} alt="Search" />
      </button>
    </form>
  );
}

export default SearchBar;
