import {useState} from 'react';
import {Link,useNavigate} from "react-router-dom";

function AdminRegister() {
  const [formData,setFormData] = useState({
  userName:"",
  email:"",
  password:""
})
const [errors, setErrors] = useState({});
const Navigate = useNavigate();
const validate = () => {
  const tempError = {};
  if(!formData.userName){
tempError.userName = "please enter name"
  }
  else if (!/^[A-Za-z]+$/.test(formData.userName)){
    tempError.userName = "name should be contain only alphabates"
  }
if(!formData.email){
  tempError.email = "please provide email"
}
else if(!/\S+@\S+\.\S+/.test(formData.email)){
  tempError.email = "email type is invaild"
}

if(!formData.password){
  tempError.password = "please provide password"
}
else if(formData.password.length< 6){
  tempError.password = "password length must be greate than 5"
}
setErrors(tempError)

return Object.keys(tempError).length === 0;
}
const handleChange = (e) => {
  setFormData(pre => ({...pre,[e.target.name]:e.target.value}));
}

const handleSubmit = async (e) => {
  e.preventDefault();
  if(validate()){
  const response = await fetch('http://localhost:8000/api/registerAdmin',{
      method:"post",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formData)
    });
  const data = await response.json();
  if(data.success === false){
    setErrors({serverError:data.message})
  }
  else{
    Navigate("/adminLogin");
  }
  console.log(data)
  }
  }
  return(<div style={{backgroundImage:'url("/images/sample-image-2.jpg")'}}>
 <h3 className="admin-back">
  <Link to={"/adminLogin"}>← Back to Login</Link>
</h3>

<form className="admin-form" method="post" onSubmit={handleSubmit}>
  <label>Name</label>
  <input name="userName" onChange={handleChange} type="text"/>
{errors.userName && <p>{errors.userName}</p>}
  <label>Email</label>
  <input name="email" onChange={handleChange} type="email" />
{errors.email && <p>{errors.email}</p>}
  <label>Password</label>
  <input name="password" onChange={handleChange} type="password"/>
{errors.password && <p>{errors.password}</p>}
{errors.serverError && <p>{errors.serverError}</p>}
  <button type="submit" className="admin-btn">Register</button>
</form>

  </div>
  )
}

export default AdminRegister;