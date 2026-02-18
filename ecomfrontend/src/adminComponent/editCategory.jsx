import { useParams, Link } from 'react-router-dom'; 
import { useState } from 'react';

function EditCategory() {
  
  const { categoryId } = useParams();

  const [category, setCategory] = useState({
    categoryName: "",
    categoryImage: null
  });

  const [error, setError] = useState({});

  // fetch category data to pre-fill form

  const changeHandle = (e) => {
    const { name, value, files } = e.target;
    if(name === "categoryImage") {
      setCategory(prev => ({ ...prev, categoryImage: files[0] }));
    } else {
      setCategory(prev => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    let tempError = {};
    if(!category.categoryName) tempError.categoryName = "Enter category name";
    else if(!isNaN(category.categoryName)) tempError.categoryName = "Name is invalid";

    // image is optional during edit
    // if(!product.productImage) tempError.productImage = "Product image is mandatory";

    setError(tempError);
    return Object.keys(tempError).length === 0;
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    console.log("Submitting category update...", category);

    if(!validate()) {
      console.log("Validation failed", error);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("categoryName", category.categoryName);
      if(category.categoryImage) formData.append("categoryImage", category.categoryImage);
      const token = localStorage.getItem("token");
      const res = await fetch(`https://ecomproject-2-ugy3.onrender.com/api/updateCategory/${categoryId}`, {
        method: "PUT",
        headers:{Authorization:`bearer ${token}`},
        body: formData
      });

      const data = await res.json();
      console.log("Update response:", data.message);

      if(data.success) alert("✅ " + data.message);
      else alert("❌ " + data.message);
    } catch(err) {
      console.error("Failed to update product:", err);
      alert("Error updating product, check console."+err);
    }
  };

  return (
    <div>
      <Link to={"/adminallcategories"}>Back</Link>
      <form
        className="add-product-form"
        onSubmit={submitHandle}
        encType="multipart/form-data"
        style={{ backgroundImage: "url(/images/jaggu.jpg)" }}
      >
        <h2>Edit Category</h2>

        <label>Name</label>
        <input name="categoryName" value={category.categoryName} onChange={changeHandle} type="text" />
        {error.categoryName && <p style={{ color: "red" }}>{error.categoryName}</p>}

        <label>Image</label>
        <input type="file" name="categoryImage" onChange={changeHandle} />
        {error.categoryImage && <p style={{ color: "red" }}>{error.categoryImage}</p>}

       {error.servererror && <p>{error.servererror}</p>}
        <button type="submit">Update Category</button>
      </form>
    </div>
  );
}

export default EditCategory;
