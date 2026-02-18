import React from 'react';
import { useContext,useState } from 'react';
import { AppContext } from '../context/ProvideContext';
import {useNavigate,Link} from 'react-router-dom';

const AddProduct = () => {
  const {categories} = useContext(AppContext);
 const Navigate = useNavigate();
  const [products,setProducts]= useState({
    productName:"",
    productPrice:"",
    productCategory:"",
    productImage:null,
    productQuantity:"",
    productDescription:""
});
  console.log(products)
  const [error,setError] = useState({});

  const validation = () => {
    let tempErr = {};
     if(!products.productName){
      tempErr.productName = "please enter product name"
     }
     else if(!isNaN(products.productName)){
      tempErr.productName = "name should be in string"
     }
    if(!products.productImage){
      tempErr.productImage = "image is mandatory"
    }
    if(!products.productQuantity){
      tempErr.productQuantity = "enter product quantity"
    }
    if(!products.productCategory){
      tempErr.productCategory = "please select product category"
    }
   if(!products.productPrice){
    tempErr.productPrice = "enter product price"
   }
   if(!products.productDescription){
    tempErr.productDescription ="please prvide product description"
   }
   else if((products.productDescription).length <100){
    tempErr.productDescription ="description size is not sufficient"
   }
    setError(tempErr)
    return Object.keys(tempErr).length === 0;
  }

  const changeHandle = (e) => {
  setProducts((pre => ({...pre, [e.target.name]:e.target.value})))
  }
  const submitHandle =async(e) => {

   const formdata = new FormData();
   formdata.append("productName", products.productName);
   formdata.append("productImage", products.productImage);
   formdata.append("productQuantity", products.productQuantity);
   formdata.append("productPrice", products.productPrice);
   formdata.append("productCategory", products.productCategory);
   formdata.append("productDescription", products.productDescription);

    const token = localStorage.getItem("token");
e.preventDefault();
if(validation()){
 const response = await fetch('http://localhost:8000/api/createProduct',{
  method:"post",
  headers:{
    Authorization:`Bearer ${token}`
  },
  body:formdata
})
.catch(err => console.log("error"+err));
 const data = await response.json();
 if(data.success === true){
  alert(data.message)
  Navigate("/adminPanel");
 }
}
  }
  return (
    <div className="add-product-page">
  <Link to={"/adminPanel"} className="back-link">← Back</Link>

  <form
    className="add-product-form"
    onSubmit={submitHandle}
    encType="multipart/form-data"
    style={{backgroundImage:"url(/images/jaggu.jpg)"}}
  >
    <h2>Add Product</h2>

    <label>Name</label>
    <input name="productName" onChange={changeHandle} type="text" />
     {error.productName && <p style={{color:"red"}}>{error.productName}</p>}
    <label>Price</label>
    <input name="productPrice" onChange={changeHandle} type="text" />
    {error.productPrice && <p style={{color:"red"}}>{error.productPrice}</p>}
    <label>Category</label>
    <select onChange={changeHandle} name="productCategory">
      <option value="">Select Category</option>
      {categories.map((cate) => (
        <option key={cate._id} value={cate._id}>
          {cate.categoryName}
        </option>
      ))}
    </select>
{error.productCategory && <p style={{color:"red"}}>{error.productCategory}</p>}
    <label>Image</label>
    <input
      type="file"
      name="productImage"
      onChange={(e) =>
        setProducts((pre) => ({
          ...pre,
          productImage: e.target.files[0],
        }))
      }
    />
    <label>Description</label>
    <textarea name="productDescription" onChange={changeHandle} type="text"></textarea>
    {error.productDescription && <p>{error.productDescription}</p>}
{error.productImage && <p style={{color:"red"}}>{error.productImage}</p>}
    <label>Quantity</label>
    <input name="productQuantity" onChange={changeHandle} type="number" />
{error.productQuantity && <p style={{color:"red"}}>{error.productQuantity}</p>}
    <button type="submit">Add Product</button>
  </form>
</div>

  );
}

export default AddProduct;
