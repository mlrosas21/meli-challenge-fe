import "./ProductDetails.scss";
import { formatMoney, formatCondition, formatAsTwoDigits } from "@utils/formatter";
import Breadcrumbs from "@components/Breadcrumbs/Breadcrumbs";

function ProductDetails({ details }) {
  return (
    details && (
      <div className="container">
        <Breadcrumbs categories={details.categories} />
        <article className="item-details">
          <div>
            <img src={details.picture} alt={details.title} />
            <section className="description">
              <h2>Descripción del producto</h2>
              <p>{details.description}</p>
            </section>
          </div>
          <section className="main-info">
            <small>
              {" "}
              {formatCondition(details.condition)} - {details.sold_quantity}{" "}
              vendido{details.sold_quantity > 1 ? "s" : ""}
            </small>
            <h1>{details.title}</h1>
            <span className="price">$ {formatMoney(details.price.amount)} <sup className="decimals">{formatAsTwoDigits(details.price.decimals)}</sup> </span>
            <button>Comprar</button>
          </section>
        </article>
      </div>
    )
  );
}

export default ProductDetails;
