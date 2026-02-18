import { useState,useContext } from "react";
import { AppContext } from "../context/ProvideContext";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function BestSelling() {
  const { products } = useContext(AppContext);
  const {addTocart} = useContext(CartContext);
  const [purchaseQuantity,setpurchaseQuantity] = useState({});


  return (
    <section className="pb-5">
      <div className="container-lg">

        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between my-4">
              <h2 className="section-title">Best selling products</h2>
              <div className="d-flex align-items-center">
                <Link to={"/viewallproducts"} className="btn btn-primary rounded-1">View All</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">

              {products.slice(0, 8).map((pbs) => (
  <div className="col" key={pbs._id}>
    <div className="product-item">

      {/* ✅ ONLY product display is clickable */}
      <Link
  to={`/viewProduct/${pbs._id}`}
  className="product-link text-decoration-none text-dark"
>

        <figure>
          <img
            src={`http://localhost:8000/uploads/${pbs.productImage}`}
            alt={pbs.productName}
            className="img-fluid"
          />
        </figure>

        <div className="d-flex flex-column text-center">
          <h3 className="fs-6 fw-normal">{pbs.productName}</h3>

          <div>
            <svg style={{ display: "none" }}>
              <symbol id="star-full" viewBox="0 0 24 24">
                <path d="M12 17.3l6.18 3.7-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </symbol>

              <symbol id="star-half" viewBox="0 0 24 24">
                <path d="M12 2v15.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61z"/>
              </symbol>
            </svg>

            <span className="rating">
              <svg width="18" height="18" className="text-warning"><use href="/" /></svg>
              <svg width="18" height="18" className="text-warning"><use href="/" /></svg>
              <svg width="18" height="18" className="text-warning"><use href="/" /></svg>
              <svg width="18" height="18" className="text-warning"><use href="/" /></svg>
              <svg width="18" height="18" className="text-warning"><use href="/" /></svg>
            </span>
            <span>(222)</span>
          </div>

          <div className="d-flex justify-content-center align-items-center gap-2">
            <del>₹{pbs.productPrice}</del>
            <span className="text-dark fw-semibold">₹{pbs.productPrice}</span>
          </div>
        </div>
      </Link>

      {/* ✅ Actions OUTSIDE Link */}
      <div className="button-area p-3 pt-0">
        <div className="row g-1 mt-2">
          <div className="col-3">
            <input
              type="number"
              className="form-control"
              min="1"
              value={purchaseQuantity[pbs._id] || 1}
              onChange={(e) =>
                setpurchaseQuantity((pre) => ({
                  ...pre,
                  [pbs._id]: Number(e.target.value),
                }))
              }
            />
          </div>

          <div className="col-7">
            <button
              className="btn btn-primary w-100"
              onClick={() => {
                if ((purchaseQuantity[pbs._id] || 1) > pbs.productQuantity) {
                  alert("select less items");
                  return;
                }
                addTocart(pbs, purchaseQuantity[pbs._id] || 1);
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
  </div>
))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BestSelling;
