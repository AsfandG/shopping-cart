import React from "react";
import Product from "./Product";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Laptop",
      image:
        "https://www.czone.com.pk/Images/Thumbnails/copy-27-czone.com.pk-1540-13205-060922091650.jpg",
      price: 4301,
    },
    {
      id: 2,
      title: "Phone",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRbGmr-vAHKC_If0DlHAKe_02b7kE7yX0bxA&usqp=CAU",
      price: 2699,
    },
    {
      id: 3,
      title: "Tablet",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNps83o4VgoQXBbyCbSOf6cDdYbFCsqRoWGQ&usqp=CAU",
      price: 3140,
    },
  ];

  return (
    <div className="container p-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
