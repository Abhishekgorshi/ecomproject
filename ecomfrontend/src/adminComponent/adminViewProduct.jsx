import {useState,useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'; 

function AdminViewProduct () {
  const [product,setProduct] = useState([]);
  const {productId} = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/api/viewProduct/${productId}`)
    .then(res => res.json())
    .then(response => setProduct(response.data))
    .catch(error => console.log(error))
  },[])
  
  return (
    <div>
      <Link to={'/adminallproducts'}>back</Link>
      <img src={`http://localhost:8000/uploads/${product.productImage}`} />
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