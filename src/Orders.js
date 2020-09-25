import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((item) => ({
              id: item.id,
              data: item.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }

    return () => {
      // cleanup
    };
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders.length > 0 ? (
          orders.map((order) => <Order order={order} />)
        ) : (
          <h2>Sorry, you do not have an order yet.</h2>
        )}
      </div>
    </div>
  );
}

export default Orders;
