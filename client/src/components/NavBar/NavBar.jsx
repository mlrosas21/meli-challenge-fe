import "./NavBar.scss";
import logo from "@assets/logo.png";
import searchLogo from "@assets/search.svg";

function NavBar() {
  return (
    <nav>
      <div className="imageContainer">
        <img src={logo} />
      </div>
      <form>
        <input className="searchBar" placeholder="Nunca dejes de buscar" />
        <button>
          <img src={searchLogo}></img>
        </button>
      </form>
    </nav>
  );
}

export default NavBar;
