import './ProductDetails.scss'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "@service/items";
import { formatMoney, formatCondition } from "@utils/formatter";


function ProductDetails() {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { item } = await getItem(id);
      setItemDetails(item);
    };

    fetchData();
  }, [id]);

  return (
    itemDetails && (
      <article>
        <div>
          <img src={itemDetails.picture} alt={itemDetails.title} />
          <section className='description'>
            <h2>Descripción del producto</h2>
            <p>{itemDetails.description}</p>
          </section>
        </div>
        <section className='mainInfo'>
          <small> {formatCondition(itemDetails.condition)} - {itemDetails.sold_quantity} vendido{itemDetails.sold_quantity > 1 ? 's':''}</small>
          <h1>{itemDetails.title}</h1>
          <span className='price'>$ {formatMoney(itemDetails.price.amount)}</span>
          <button>Comprar</button>
        </section>
      </article>
    )
  );
}

export default ProductDetails;
