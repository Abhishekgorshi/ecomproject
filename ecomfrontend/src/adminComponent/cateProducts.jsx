import React from 'react';
import { Link,useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

const AdminCateProducts = () => {
   const [allproducts,setAllProducts] = useState([]);
  const {CatId} = useParams();

  useEffect(() => {
    fetch(`https://ecomproject-2-ugy3.onrender.com/api/CateProducts/${CatId}`)
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
            src={`https://ecomproject-2-ugy3.onrender.com/uploads/${product.productImage}`}
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
