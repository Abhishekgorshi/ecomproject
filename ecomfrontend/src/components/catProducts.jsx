import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CatProducts() {
  const [allproducts, setAllProducts] = useState([]);
  const { CatId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/api/CateProducts/${CatId}`)
      .then(res => res.json())
      .then(response => setAllProducts(response.data))
      .catch(error => console.log(error));
  }, [CatId]);

  return (
    <div className="cat-page">
      <Link to="/" className="cat-back">← Back</Link>

      <div className="cat-container">
        {allproducts.map(product => (
          <Link to={`/viewProduct/${product._id}`}>
          <div className="cat-card" key={product._id}>
            <img
              className="cat-image"
              src={`http://localhost:8000/uploads/${product.productImage}`}
              alt={product.productName}
            />

            <h3 className="cat-title">{product.productName}</h3>
            <p className="cat-qty">Quantity: {product.productQuantity}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CatProducts;
