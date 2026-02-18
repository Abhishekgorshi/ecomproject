import React from 'react';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AppContext } from '../context/ProvideContext';

const AdminAllProducts = () => {
  const {products} = useContext(AppContext);
  return (
    <div>
       <Link to={"/adminPanel"}>back</Link>
   <table class="product-table">
  <thead>
    <tr>
      <th>S No.</th>
      <th>Product Name</th>
      <th>Product Quantity</th>
      <th>Product Price</th>
      <th>View Details</th>
    </tr>
  </thead>

  <tbody>
    { products.map((p, index) => ( 
      <tr>
        <td>{ index + 1 }</td>
        <td>{ p.productName }</td>
        <td>{ p.productQuantity }</td>
        <td>₹ { p.productPrice }</td>
        <td><Link to={`/adminViewProduct/${p._id}`} class="view-btn">View</Link></td>
      </tr>
     ))} 
  </tbody>
</table>

    </div>
  );
}

export default AdminAllProducts;
