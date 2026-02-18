import { createContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

export const AppContext = createContext(null);

function ProvideContext({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/api")
      .then(res => res.json())
      .then(response => {
        setCategory(response.data.category);
        setProducts(response.data.products);
      })
      .catch(err => console.log(err));
  }, []);

  const handleLogout = () => {
localStorage.removeItem("token");
Navigate("/adminlogin")
  }

  return (
    <AppContext.Provider value={{ products, categories,handleLogout }}>
      {children}
    </AppContext.Provider>
  );
}

export default ProvideContext;
