import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [error,setError] = useState({});
  const Navigate = useNavigate();
  const validate = () => {
    const tempErrors = {};
    if(!formData.userName){
      tempErrors.userName = "username is required"
    }
    else if(!/^[A-Za-z]+$/.test(formData.userName))
    {
      tempErrors.userName ="username should be in alphabates"
    }

    if(!formData.email){
      tempErrors.email = "email cant be emoty"
    }
    else if(!/\S+@\S+\.\S+/.test(formData.email)){
      tempErrors.email = "email is invalid"
    }

    if(!formData.password){
      tempErrors.password = "password cant be empty"
    }
    else if(formData.password.length < 6){
      tempErrors.password ="password length must be greater than 5"
    }
setError(tempErrors);

return Object.keys(tempErrors).length === 0;
  }

  const handleChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validate()){

      const response = await fetch("https://ecomproject-2-ugy3.onrender.com/api/registerUser", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      console.log(data);
      if(data.success === false){
        setError({servererror : data.message})
      }
      else{
           Navigate("/")
      }
    };
  }

  return (<>
      <Link to={"/"} className="back-link">← Back</Link>
    <div className="register-container" style={{backgroundImage:'url("/images/sample-image.jpg")'}}>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Register</h2>

        <label>Name:</label>
        <input
          name="userName"
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
          
        />
        {error.userName && <p>{error.userName}</p>}
        <label>Email:</label>
        <input
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Enter your email"
          
        />
{error.email && <p>{error.email}</p>}
        <label>Password:</label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Enter your password"
          
        />
{error.password && <p>{error.password}</p>}
{error.servererror && <p>{error.servererror}</p>}
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
</>
  );
}

export default RegisterForm;
