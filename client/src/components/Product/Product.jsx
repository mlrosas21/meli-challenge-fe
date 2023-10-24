import "./Product.scss";
import Breadcrumbs from "@components/Breadcrumbs/Breadcrumbs";
import { createContext } from "react";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
import ProductCondition from "./ProductCondition";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";

export const ProductContext = createContext();

function Product({ details }) {
  return (
    details && (
      <ProductContext.Provider value={details}>
        <div className="container">
          <Breadcrumbs categories={details.categories} />
          <article className="product">
            <Details>
              <ProductImage />
              <ProductDescription />
            </Details>
            <MainInfo>
              <ProductCondition />
              <ProductTitle />
              <ProductPrice />
              <button>Comprar</button>
            </MainInfo>
          </article>
        </div>
      </ProductContext.Provider>
    )
  );
}

const Details = ({ children }) => {
  return <section className="item-details">{children}</section>;
};

const MainInfo = ({ children }) => {
  return <section className="main-info">{children}</section>;
};

Product.MainInfo = MainInfo;
Product.Details = Details;

export default Product;
