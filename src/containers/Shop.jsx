import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/products/productSlice";
import Hero from "../components/Hero";

function Shop() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  return (
    <>
      <Hero
        title="Shop"
        none="d-none"
      />
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */ }
            { products.map((product) => {
              const { id, title, price, image } = product;

              return (
                <div className="col-12 col-md-4 col-lg-3 mb-5">
                  <a className="product-item" onClick={ () => dispatch(addToCart(product)) }>
                    <img src={ image } className="img-fluid product-thumbnail" />
                    <h3 className="product-title">{ title }</h3>
                    <strong className="product-price">
                      ${ price.toFixed(2) }
                    </strong>
                    <span className="icon-cross">
                      <img src="images/cross.svg" className="img-fluid" />
                    </span>
                  </a>
                </div>
              );
            }) }
            {/* End Column 1 */ }
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
