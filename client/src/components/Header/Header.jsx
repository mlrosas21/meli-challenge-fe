import "./Header.scss";
import logo from "@assets/logo.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

function Header() {
  return (
    <header>
      <div className="container">
      <Link to="/">
        <img src={logo} alt="Logo Mercado Libre" className="logo" />
      </Link>
      <SearchBar />
      </div>
    </header>
  );
}

export default Header;
