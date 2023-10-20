import "./Header.scss";
import logo from "@assets/logo.png";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} />
      </Link>
      <SearchBar />
    </header>
  );
}

export default Header;
