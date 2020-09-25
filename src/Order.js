import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getAggregatedProducts } from "./reducer";

function Order({ order }) {
  const aggregatedBasket = getAggregatedProducts(order.basket);

  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {aggregatedBasket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          quantity={item.quantity}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order__total">Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
