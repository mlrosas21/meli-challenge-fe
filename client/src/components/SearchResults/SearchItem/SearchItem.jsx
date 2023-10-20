import "./SearchItem.scss";
import { formatMoney } from "@utils/formatter";
import { useNavigate } from "react-router-dom";

function SearchItem({ item }) {
  console.log(item)
  const { id, title, price, picture, condition } = item;

  const navigate = useNavigate()

  const handleClick = (id) => {
    console.log(id);
    navigate(`/items/${id}`)
  };

  return (
    <article className="itemCard" onClick={() => handleClick(id)}>
      <img src={picture} alt={title} />
      <div className="itemMainInfo">
        <p className="itemPrice">$ {formatMoney(price.amount, price.decimals)}</p>
        <p className="itemName">{title}</p>
      </div>
      <p className="stateName">{condition}</p>
    </article>
  );
}

export default SearchItem;
