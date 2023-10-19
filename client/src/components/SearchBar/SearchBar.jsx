import searchLogo from "@assets/search.svg";
import "./SearchBar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState();
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/items?search=${searchTerm}`)
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
        <img src={searchLogo}></img>
      </button>
    </form>
  );
}

export default SearchBar;
