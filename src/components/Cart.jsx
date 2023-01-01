import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, total, subtotal, tax, shipping } = useSelector(
    (store) => store.cart
  );

  const clear = () => {
    dispatch(clearCart());
  };

  if (cartItems.length < 1) {
    return (
      <div className="py-5">
        <h1 className="text-center">Your Bag is Empty!!!</h1>
      </div>
    );
  }
  return (
    <section className="d-flex">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            {cartItems.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
          </div>
          <div className="col-md-2 py-5">
            <h5>
              SubTotal: {subtotal}
              <span className="fs-6"> Rs./</span>
            </h5>
            <h5>
              Shipping: {shipping}
              <span className="fs-6"> Rs./</span>
            </h5>
            <h5>
              Tax: {tax}
              <span className="fs-6"> Rs./</span>
            </h5>
            <h5>
              Total: {total}
              <span className="fs-6"> Rs./</span>
            </h5>

            <div className="col d-grid">
              <button className="btn btn-warning mb-3">CheckOut</button>
              <button className="btn btn-danger" onClick={clear}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
