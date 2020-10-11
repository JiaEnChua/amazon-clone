import React, { useEffect } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { getAggregatedProducts } from "./reducer";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  var aggregatedBasket = getAggregatedProducts(basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="bannerAd"
        />
        <div className="checkout__body">
          <h3 className="checkout__greeting">Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>

          <div>
            {aggregatedBasket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
