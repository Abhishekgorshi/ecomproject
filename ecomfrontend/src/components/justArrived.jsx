import { useContext, useRef,useState } from "react";
import { AppContext } from "../context/ProvideContext";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function Just() {
  const { products } = useContext(AppContext);
  const { addTocart } = useContext(CartContext);
  const [purchaseQuantity,setpurchaseQuantity] = useState([]);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section id="latest-products" className="products-carousel">
      <div className="container-lg py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">Just Arrived</h2>
          <div>
            <button onClick={scrollLeft} className="btn btn-primary me-2">❮</button>
            <button onClick={scrollRight} className="btn btn-primary">❯</button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="just-scroll"
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            paddingBottom: "10px",
            scrollbarWidth: "none", // Firefox
          }}
        >
          {products.map(pr => (
            <div
  key={pr._id}
  className="just-item"
  style={{ flex: "0 0 220px", maxWidth: "220px" }}
>
  {/* 🔹 LINK ONLY FOR IMAGE + NAME */}
  <Link
    to={`/viewProduct/${pr._id}`}
    className="product-link text-decoration-none text-dark d-block"
  >
    <img
      src={`https://ecomproject-2-ugy3.onrender.com/uploads/${pr.productImage}`}
      alt={pr.productName}
      style={{ width: "100%", height: "180px", objectFit: "cover" }}
    />
    <h3 className="fs-6 fw-normal text-center mt-2">
      {pr.productName}
    </h3>
  </Link>

  {/* 🔹 RATING */}
  <div className="text-center">
    <span className="rating">
      ⭐⭐⭐⭐☆
    </span>
    <span>(222)</span>
  </div>

  {/* 🔹 PRICE */}
  <div className="d-flex justify-content-center align-items-center gap-2">
    <del>${pr.productPrice}</del>
    <span className="fw-semibold">$18.00</span>
    <span className="badge border">10% OFF</span>
  </div>

  {/* 🔹 ACTIONS (NOT inside Link) */}
  <div className="button-area p-3 pt-0">
        <div className="row g-1 mt-2">
          <div className="col-3">
            <input
              type="number"
              className="form-control"
              min="1"
              value={purchaseQuantity[pr._id] || 1}
              onChange={(e) =>
                setpurchaseQuantity((pre) => ({
                  ...pre,
                  [pr._id]: Number(e.target.value),
                }))
              }
            />
          </div>

          <div className="col-7">
            <button
              className="btn btn-primary w-100"
              onClick={() => {
                if ((purchaseQuantity[pr._id] || 1) > pr.productQuantity) {
                  alert("select less items");
                  return;
                }
                addTocart(pr, purchaseQuantity[pr._id] || 1);
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
      
      
    </section>
  );
}

export default Just;
