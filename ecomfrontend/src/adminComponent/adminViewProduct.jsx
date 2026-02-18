import {useState,useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'; 

function AdminViewProduct () {
  const [product,setProduct] = useState([]);
  const {productId} = useParams();
  useEffect(() => {
    fetch(`https://ecomproject-2-ugy3.onrender.com/api/viewProduct/${productId}`)
    .then(res => res.json())
    .then(response => setProduct(response.data))
    .catch(error => console.log(error))
  },[productId])
  
  return (
    <div>
      <Link to={'/adminallproducts'}>back</Link>
      <img src={`https://ecomproject-2-ugy3.onrender.com/uploads/${product.productImage}`} alt='product' />
      <p>{product.productName}</p>
      <p>{product.productPrice}</p>
      <p>{product.productQuantity}</p>
      <p>{product.productDescription}</p>
      <button>Edit</button>
      <button>delete</button>
    </div>
  );
}

export default AdminViewProduct;