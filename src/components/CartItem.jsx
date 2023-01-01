import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  deleteItem,
  calculateTotal,
} from "../redux/cartSlice";

const CartItem = ({ id, title, price, image, quantity }) => {
  const dispatch = useDispatch();
  const addOne = (id) => {
    dispatch(increment(id));
    dispatch(calculateTotal());
  };

  const minusOne = (id) => {
    dispatch(decrement(id));
    dispatch(calculateTotal());
  };

  const deleteHandler = (id) => {
    dispatch(deleteItem(id));
    dispatch(calculateTotal());
  };
  return (
    <>
      <section className="d-flex justify-content-between align-items-center p-4">
        <div>
          <img src={image} alt={title} className="img-fluid" />
        </div>
        <div>
          <h5>{title}</h5>
        </div>
        <div>
          <p>{price} Rs.</p>
        </div>
        <div>
          <button className="btn btn-dark btn-sm" onClick={() => minusOne(id)}>
            -
          </button>
          <span className="px-3">{quantity}</span>
          <button className="btn btn-dark btn-sm" onClick={() => addOne(id)}>
            +
          </button>
        </div>
        <div>
          <button className="btn btn-dark" onClick={() => deleteHandler(id)}>
            <AiFillDelete />
          </button>
        </div>
      </section>
    </>
  );
};

export default CartItem;
