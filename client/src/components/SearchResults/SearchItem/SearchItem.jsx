import "./SearchItem.scss";
import { formatMoney } from "@utils/formatter";
import { useNavigate } from "react-router-dom";

function SearchItem({ item }) {
  const { id, title, price, picture, location } = item;

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/items/${id}`)
  };

  return (
    <article className="card" onClick={() => handleClick(id)}>
      <img src={picture} alt={title} />
      <div className="item-main-info">
        <p className="price">$ {formatMoney(price.amount, price.decimals)}</p>
        <p className="title">{title}</p>
      </div>
      <p className="location">{location.city}, {location.state}</p>
    </article>
  );
}

export default SearchItem;
