import { useContext, useRef,useState } from "react";
import { AppContext } from "../context/ProvideContext";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function Featured() {
  const { products } = useContext(AppContext);
  const {addTocart} =useContext(CartContext);
  const scrollRef = useRef(null);
  const [purchaseQuantity,setpurchaseQuantity] = useState([]);

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
    <>
      
      <section id="featured-products" className="products-carousel">
        <div className="container-lg py-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="section-title">Featured Products</h2>
            <div>
              <button onClick={scrollLeft} className="btn btn-primary me-2">❮</button>
              <button onClick={scrollRight} className="btn btn-primary">❯</button>
            </div>
          </div>

     <div ref={scrollRef}
       style={{
       display: "flex",
       gap: "20px",
        overflowX: "auto",
        paddingBottom: "10px",
       scrollbarWidth: "none" // IE 10+
       }}
      className="no-scrollbar"
      >
  {products.map(p => (
    <div
      key={p._id}
      className="product-item"
      style={{
        flex: "0 0 220px", // fixed width per item
        maxWidth: "220px"
      }}
    ><Link
  to={`/viewProduct/${p._id}`}
  className="product-link text-decoration-none text-dark"
>
      <img
        src={`https://ecomproject-2-ugy3.onrender.com/uploads/${p.productImage}`}
        alt={p.productName}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <p className="mt-2 text-center">{p.productName}</p>
       <div><svg style={{display:"none"}}>
             <symbol id="star-full" viewBox="0 0 24 24">
                 <path d="M12 17.3l6.18 3.7-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
               </symbol>

              <symbol id="star-half" viewBox="0 0 24 24">
               <path d="M12 2v15.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61z"/>
                </symbol>
              </svg>

                      <span class="rating">
                        <svg width="18" height="18" class="text-warning"><use href="/"></use></svg>
                        <svg width="18" height="18" class="text-warning"><use href="/"></use></svg>
                        <svg width="18" height="18" class="text-warning"><use href="/"></use></svg>
                        <svg width="18" height="18" class="text-warning"><use href="/"></use></svg>
                        <svg width="18" height="18" class="text-warning"><use href="/"></use></svg>
                      </span>
                      <span>(222)</span>
                    </div>
                <div className="d-flex justify-content-center align-items-center gap-2">
                <del>${p.productPrice}</del>
                <span className="text-dark fw-semibold">$18.00</span>
                <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
                  10% OFF
                </span>
              </div>
       <div className="button-area p-3 pt-0">
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
          </Link>
    </div>
  ))}
</div>


        </div>
      </section>
    </>
  );
}

export default Featured;
