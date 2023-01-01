import React from "react";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { calculateTotal } from "../redux/cartSlice";

const Product = ({ id, title, price, image }) => {
  const dispatch = useDispatch();
  const addItem = (options) => {
    dispatch(addToCart(options));
    dispatch(calculateTotal());
    toast.success("Item added to cart");
  };
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{price}Rs.</p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => addItem({ id, title, price, image, quantity: 1 })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
