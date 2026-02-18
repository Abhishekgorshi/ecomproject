import {useState,useContext,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom'; 
import { CartContext } from '../context/cartContext';

function ViewProduct () {
  const [product,setProduct] = useState([]);
  const {productId} = useParams();
  const {addTocart} = useContext(CartContext);
   const [purchaseQuantity,setpurchaseQuantity] = useState({});
  

  useEffect(() => {
    fetch(`http://localhost:8000/api/viewProduct/${productId}`)
    .then(res => res.json())
    .then(response => setProduct(response.data))
    .catch(error => console.log(error))
  },[productId])
  
 return (<>
    <Link to={'/'}>Back</Link>
  <div className="view-product-container">
    <img src={`http://localhost:8000/uploads/${product.productImage}`} alt={product.productName} />
    <p>{product.productName}</p>
    <p>Price: ₹{product.productPrice}</p>
    <p>Quantity: {product.productQuantity}</p>
    <p>{product.productDescription}</p>
      <div className="button-area p-3 pt-0">
        <div className="row g-1 mt-2">
          <div className="col-3">
            <input
              type="number"
              className="form-control"
              min="1"
              value={purchaseQuantity[product._id] || 1}
              onChange={(e) =>
                setpurchaseQuantity((pre) => ({
                  ...pre,
                  [product._id]: Number(e.target.value),
                }))
              }
            />
          </div>

          <div className="col-7">
            <button
              className="btn btn-primary w-100"
              onClick={() => {
                if ((purchaseQuantity[product._id] || 1) > product.productQuantity) {
                  alert("select less items");
                  return;
                }
                addTocart(product, purchaseQuantity[product._id] || 1);
              }}
            >
              Add to Cart
            </button>
          </div>

          <div className="col-2">
            <button className="btn btn-outline-dark w-100">❤</button>
          </div>
        </div>
      </div>  </div>
  </>
);

}

export default ViewProduct;