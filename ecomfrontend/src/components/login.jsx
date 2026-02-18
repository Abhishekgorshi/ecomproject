import { useState } from 'react';
import {Link} from 'react-router-dom';

function Login () {
  const [formData,setFormData]= useState({
    email:"",
    password:""
  })
  
  const [error,setError]= useState({});

  const validation = () => {
  const tempError = {};
   if(!formData.email){
  tempError.email = "please enter email"
}
   else if(!/\S+@\S+\.\S+/.test(formData.email)){
    tempError.email = "email is invalid"
   }
   if(!formData.password){
    tempError.password = "password is required"
   }
   else if(formData.password.length <6){
    tempError.password ="password length must be greater than 5"
   }
   setError(tempError);
   return Object.keys(tempError).length === 0;
  }

  const handleSubmit = async(e) => {
e.preventDefault();
if(validation()){
  const response = await fetch("http://localhost:8000/api/loginUser",{
    method:"post",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formData)
  })
  const data = await response.json();
  if(data.success === false){
    setError({servererror:data.message})
  }
  console.log(data)
}

  }
  const handleChange = async(e) =>{
setFormData(pre => ({
  ...pre,[e.target.name]:e.target.value
}))
  }
  return(
    <>
  <section>
      <div class="container-lg">

        <div class="bg-secondary text-light py-5 my-5" style={{backgroundImage: 'url("/images/banner-newsletter.jpg")',backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-5 p-3">
                <div class="section-header">
                  <h2 class="section-title display-5 text-light">Get 25% Discount on your first purchase</h2>
                </div>
                <p>Just <Link to={"/register"}>Sign up & Register</Link> it now to become member.</p>
                    
              </div>
              <div class="col-md-5 p-3">
                <form method='post' onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="Email" class="form-label d-none">Email</label>
                    <input type="text"
                      class="form-control form-control-md rounded-0" onChange={handleChange} name="email" id="email" placeholder="Email"/>
                     {error.email && <p>{error.email}</p>}
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label d-none">Password</label>
                    <input type="text" onChange={handleChange} class="form-control form-control-md rounded-0" name="password" id="password" placeholder="password"/>
                    {error.password && <p>{error.password}</p>}
                    {error.servererror && <p>{error.servererror}</p>}
                  </div>
                  <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-dark btn-md rounded-0">Submit</button>
                  </div>
                </form>
                
              </div>
              
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
    </>
  )
}
export default Login;