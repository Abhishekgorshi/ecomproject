import { useState } from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function AdminLogin () {
  const [formData,setFormData]= useState({
    email:"",
    password:""
  })
  const Navigate = useNavigate();
  const [error,setError] = useState({});
const validation = () => {
let temError ={};

if(!formData.email){
temError.email = "email is required"
}
else if(!/\S+@\S+\.\S+/.test(formData.email)) {
      temError.email = "Email is invalid";
}

if(!formData.password){
  temError.password = "Password is required"
}
else if(formData.password.length <6){
  temError.password =" password length should be more than 5"
}
setError(temError);
return Object.keys(temError).length === 0;
}

  const handleSubmit = async(e) => {
e.preventDefault();
if(validation()){

const response = await fetch("http://localhost:8000/api/loginAdmin",{
  method:"post",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(formData)
})
const data = await response.json();
if(data.success == false){
  setError({servererror:data.message})
}
else{
  localStorage.setItem("token", data.token);
  Navigate("/adminPanel");
}
console.log(data)
}
  }
  const handleChange = async(e) =>{
setFormData(pre => ({
  ...pre,[e.target.name]:e.target.value
})

)
  }
  return(
    <>
  <section>
      <div class="container-lg">
           <h3> <Link to={"/"}>back to home</Link></h3>
        <div class="bg-secondary text-light py-5 my-5" style={{backgroundImage: 'url("/images/loginBackground.jpg")',backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-5 p-3">
                <div class="section-header">
                  <h2 class="section-title display-5 text-light">Manage inventory, orders, and customers in one place</h2>
                </div>
      Just <Link to={"/adminRegister"} >Sign Up & Register</Link> it to operate
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
                  <Link to={"/register"}></Link>
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
export default AdminLogin;