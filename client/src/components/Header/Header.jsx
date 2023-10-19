import "./Header.scss";
import logo from "@assets/logo.png";
import {Link} from 'react-router-dom'
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  return (
    <header>
      <div className="imageContainer">
        <Link to='/'>
          <img src={logo} />
        </Link>
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;
