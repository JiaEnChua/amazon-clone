import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="bannerAd"
        />
        <div className="checkout__body">
          <h2 className="checkout__title">Your shopping basket</h2>
          <p>{basket.map((b) => b.title)}</p>
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
