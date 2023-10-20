import "./SearchItem.scss";
import { formatMoney } from "@utils/formatter";
import { useNavigate } from "react-router-dom";

function SearchItem({ item }) {
  const { id, title, price, thumbnail, address } = item;

  const navigate = useNavigate()

  const handleClick = (id) => {
    console.log(id);
    navigate(`/items/${id}`)
  };

  return (
    <article className="itemCard" onClick={() => handleClick(id)}>
      <img src={thumbnail} alt={title} />
      <div className="itemMainInfo">
        <p className="itemPrice">$ {formatMoney(price)}</p>
        <p className="itemName">{title}</p>
      </div>
      <p className="stateName">{address.state_name}</p>
    </article>
  );
}

export default SearchItem;
