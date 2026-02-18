import React from 'react';
import { Link,useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

const AdminCateProducts = () => {
   const [allproducts,setAllProducts] = useState([]);
  const {CatId} = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/api/CateProducts/${CatId}`)
      .then(res => res.json())
      .then(response => setAllProducts(response.data))
      .catch(error => console.log(error))
  },[CatId])
  return (
      <div className="cat-container">
      <Link to="/adminallcategories">back</Link>
        {allproducts.length === 0 && (
  <span className="empty-text">
    No sufficient products for this category
  </span>
)}

      {allproducts.map(product => (
        <div className="cat-card" key={product._id}>
        <Link to={`/adminviewProduct/${product._id}`}>  <img
            src={`http://localhost:8000/uploads/${product.productImage}`}
            alt={product.productName}
          />
          <h3>{product.productName}</h3>
          <p>Quantity: {product.productQuantity}</p>
        </Link>
        </div>
      ))}
    </div>
 
  );
}

export default AdminCateProducts;
