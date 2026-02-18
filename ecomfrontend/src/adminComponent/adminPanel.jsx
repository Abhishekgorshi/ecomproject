import { useEffect, useState,useContext } from 'react';
import {Link} from 'react-router-dom';
import {AppContext} from '../context/ProvideContext';

function AdminPanel() {
const [products, setProducts] = useState([]);
const {handleLogout} = useContext(AppContext);

useEffect( () => {
  const fetchAdmin= async ()=>{
  const token = localStorage.getItem("token")
  const response= await fetch("http://localhost:8000/api/adminCorner",{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
  const data = await response.json();
  setProducts(data.data)
  console.log("data"+data)
};
fetchAdmin();
},[])

const deleteProduct = async(productId) => {

const response=await fetch(`http://localhost:8000/api/deleteProduct/${productId}`)
    const data = await response.json();
    alert(data.message)
}
  return (
    <div>
       <h1>Admin Panel</h1>

  <nav class="navbar">
    <Link to={"/addProducts"}>Add Product</Link>
    <Link to={"/adminallProducts"}>All Products</Link>
    <Link to={"/adminallcategories"}>Categories</Link>
    <Link to={"/"}>back</Link>
    <button style={{backgroundColor:"none",border:"none", borderRadius:"10px"}} onClick={handleLogout}>Log Out</button>
  </nav>

  <div class="products">
    { products.map(pr => ( 
      <div key={pr._id} class="product-card">
    <Link to={`/adminviewProduct/${ pr._id }`}> 
      <img src={`http://localhost:8000/uploads/${ pr.productImage }`} alt=""/>
        <h3>{ pr.productName }</h3>
         <p>₹ { pr.productPrice }</p>
      </Link>
        <Link to={`/editProduct/${pr._id}`}>edit</Link>
        <button onClick={() => deleteProduct(pr._id)}>delete</button>
      </div>
     ))} 
  </div>


    </div>
  );
}

export default AdminPanel;
