import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../context/ProvideContext'; 
import { useContext, useState, useEffect } from 'react';

function EditProduct() {
  const { categories } = useContext(AppContext);
  const { productId } = useParams();

  const [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    productQuantity: "",
    productPrice: "",
    productCategory: "",
    productImage: null
  });

  const [error, setError] = useState({});

  // fetch product data to pre-fill form
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("token"); // if auth needed
        const res = await fetch(`http://localhost:8000/api/viewProduct/${productId}`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {}
        });
        const data = await res.json();
        console.log("Fetched product:", data);
        if(data.success) {
          const p = data.data;
          setProduct({
            productName: p.productName || "",
            productDescription: p.productDescription || "",
            productQuantity: p.productQuantity || "",
            productPrice: p.productPrice || "",
            productCategory: p.productCategory || "",
            productImage: null // file can't prefill
          });
        }
      } catch(err) {
        console.error("Failed to fetch product:", err);
      }
    };
    fetchProduct();
  }, [productId]);

  const changeHandle = (e) => {
    const { name, value, files } = e.target;
    if(name === "productImage") {
      setProduct(prev => ({ ...prev, productImage: files[0] }));
    } else {
      setProduct(prev => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    let tempError = {};
    if(!product.productName) tempError.productName = "Enter product name";
    else if(!isNaN(product.productName)) tempError.productName = "Name is invalid";

    if(!product.productPrice) tempError.productPrice = "Enter product price";
    else if(isNaN(product.productPrice)) tempError.productPrice = "Product price is invalid";

    if(!product.productCategory) tempError.productCategory = "Please choose a category";

    if(!product.productDescription || product.productDescription.length < 10)
      tempError.productDescription = "Description is too short";

    // image is optional during edit
    // if(!product.productImage) tempError.productImage = "Product image is mandatory";

    setError(tempError);
    return Object.keys(tempError).length === 0;
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    console.log("Submitting product update...", product);

    if(!validate()) {
      console.log("Validation failed", error);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("productName", product.productName);
      formData.append("productPrice", product.productPrice);
      formData.append("productQuantity", product.productQuantity);
      if(product.productImage) formData.append("productImage", product.productImage);
      formData.append("productDescription", product.productDescription);
      formData.append("productCategory", product.productCategory);

      const res = await fetch(`http://localhost:8000/api/updateProduct/${productId}`, {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      console.log("Update response:", data);

      if(data.success) alert("✅ " + data.message);
      else alert("❌ " + data.message);
    } catch(err) {
      console.error("Failed to update product:", err);
      alert("Error updating product, check console."+err);
    }
  };

  return (
    <div>
      <Link to={"/adminPanel"}>Back</Link>
      <form
        className="add-product-form"
        onSubmit={submitHandle}
        encType="multipart/form-data"
        style={{ backgroundImage: "url(/images/jaggu.jpg)" }}
      >
        <h2>Edit Product</h2>

        <label>Name</label>
        <input name="productName" value={product.productName} onChange={changeHandle} type="text" />
        {error.productName && <p style={{ color: "red" }}>{error.productName}</p>}

        <label>Price</label>
        <input name="productPrice" value={product.productPrice} onChange={changeHandle} type="text" />
        {error.productPrice && <p style={{ color: "red" }}>{error.productPrice}</p>}

        <label>Category</label>
        <select value={product.productCategory} onChange={changeHandle} name="productCategory">
          <option value="">Select Category</option>
          {categories.map(cate => (
            <option key={cate._id} value={cate._id}>
              {cate.categoryName}
            </option>
          ))}
        </select>
        {error.productCategory && <p style={{ color: "red" }}>{error.productCategory}</p>}

        <label>Image</label>
        <input type="file" name="productImage" onChange={changeHandle} />
        {error.productImage && <p style={{ color: "red" }}>{error.productImage}</p>}

        <label>Description</label>
        <textarea name="productDescription" value={product.productDescription} onChange={changeHandle}></textarea>
        {error.productDescription && <p style={{ color: "red" }}>{error.productDescription}</p>}

        <label>Quantity</label>
        <input name="productQuantity" value={product.productQuantity} onChange={changeHandle} type="number" />
        {error.productQuantity && <p style={{ color: "red" }}>{error.productQuantity}</p>}

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;
