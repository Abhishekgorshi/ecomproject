import React from 'react';
import { useState,useContext } from 'react';
import { AppContext } from '../context/ProvideContext';
import {CartContext} from '../context/cartContext';

const ViewAllProducts = () => {
  const {products} = useContext(AppContext);
  const {addTocart} =useContext(CartContext);

  const[purchaseQuantity,setpurchaseQuantity] = useState([]);
  return (
    <div className="viewall-container">
  <a href="/" className="back-link">back</a>

  <div className="products-grid">
    {products.map((p) => (
      <div className="product-card" key={p._id}>
        <img src={`https://ecomproject-2-ugy3.onrender.com/uploads/${p.productImage}`} alt='productimage' />
        <p className="product-name">{p.productName}</p>
        <p className="product-price">₹{p.productPrice}</p>
        <p>{p.productDescription}</p>
         <div className="button-area p-3 pt-0">
        <div className="row g-1 mt-2">
          <div className="col-3">
            <input
              type="number"
              className="form-control"
              min="1"
              value={purchaseQuantity[p._id] || 1}
              onChange={(e) =>
                setpurchaseQuantity((pre) => ({
                  ...pre,
                  [p._id]: Number(e.target.value),
                }))
              }
            />
          </div>

          <div className="col-7">
            <button
              className="btn btn-primary w-100"
              onClick={() => {
                if ((purchaseQuantity[p._id] || 1) > p.productQuantity) {
                  alert("select less items");
                  return;
                }
                addTocart(p, purchaseQuantity[p._id] || 1);
              }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-2">
            <button className="btn btn-outline-dark w-100">❤</button>
          </div>
        </div>
      </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default ViewAllProducts;
