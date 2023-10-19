import "./SearchItem.scss";
import { formatMoney } from '@utils/formatter'

function SearchItem({ item }) {
  const { id, title, price, thumbnail, address } = item;

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <article className="itemCard" onClick={() => handleClick(id)}>
      <div className="imageContainer">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="itemMainInfo">
        <p className="itemPrice">$ {formatMoney(price)}</p>
        <p className="itemName">{title}</p>
      </div>
      <p className="stateName">{address.state_name}</p>
    </article>
  );
}

export default SearchItem;
