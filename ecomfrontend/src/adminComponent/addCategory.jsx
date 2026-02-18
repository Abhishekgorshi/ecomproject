import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';

function AddCategory ()
 {
  const [category,setCategory] = useState({
    categoryName:"",
    categoryImage:null
  });
  const Navigate = useNavigate();
  const [error,setError] = useState({});


  const formData = new FormData();
  formData.append("categoryName",category.categoryName);
  formData.append("categoryImage", category.categoryImage);

  const changeHandle = (e) => {
  setCategory((pre) => ({...pre,categoryName:e.target.value}))
  }

  const validation = () => {
   let tempError ={};
   if(!category.categoryName){
    tempError.categoryName = "please provide caetgoryName"
   }
   else if(!isNaN(category.categoryName)){
    tempError.categoryName = "category name is not valid"
   }

   if(!category.categoryImage){
    tempError.categoryImage="category image is mandatory"
   }
   setError(tempError)
   return Object.keys(tempError).length ===0;
  }

  const submitHandle = async (e) => {
    
    e.preventDefault();
    if(validation()){

      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8000/api/createCategory",{
        method:"post",
        headers:{ Authorization: ` Bearer ${token} `
      },
      body:formData
    })
    const data = await response.json();

    if(data.success === false){
      setError({serverError:data.message})
    }
    else{
      alert(data.message)
      Navigate("/adminallcategories")
    }
    
  }
  
}


  
  return (
   <div className="add-category-page">
  <Link to={"/adminallcategories"} className="back-link">← Back</Link>

  <form
    className="add-category-form"
    onSubmit={submitHandle}
    encType="multipart/form-data"
    style={{backgroundImage:"url(/images/billiTom.jpg)", backgroundSize:"contain"}}
  >
    <h2>Add Category</h2>

    <label>Name</label>
    <input
      name="categoryName"
      onChange={changeHandle}
      type="text"
    />
    {error.categoryName && <p style={{color:"red"}}>{error.categoryName}</p>}

    <label>Category Image</label>
    <input
      name="categoryImage"
      type="file"
      onChange={(e) =>
        setCategory((pre) => ({
          ...pre,
          categoryImage: e.target.files[0],
        }))
      }
      />
      {error.categoryImage && <p style={{color:"red"}}>{error.categoryImage}</p>}
      {error.serverError && <p style={{color:"red"}}>{error.serverError}</p>}
    <button type="submit">Add Category</button>
  </form>
</div>

  );
}

export default AddCategory;
