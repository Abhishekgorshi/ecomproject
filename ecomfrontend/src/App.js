
import './App.css';
import AdminPanel from './adminComponent/adminPanel';
import EditProduct from './adminComponent/editProduct';
import AddCategory from './adminComponent/addCategory';
import AdminAllCategories from './adminComponent/allCategories';
import AdminAllProducts from './adminComponent/allProducts';
import AdminCateProducts from './adminComponent/cateProducts';
import AdminRegister from './adminComponent/register';
import AddProduct from './adminComponent/addProduct';
import AdmiViewProduct from './adminComponent/adminViewProduct';
import EditCategory from './adminComponent/editCategory';
import AdminLogin from './adminComponent/login';

import Firstpage from "./components/firstPage";
import { Routes, Route } from 'react-router-dom';
import CatProducts from './components/catProducts';
import RegisterForm from './components/registerForm';
import ViewAllCategories from './components/viewAllCategories';
import ViewAllProducts from './components/viewallproducts';
import ViewProduct from './components/viewProduct';
import Cart from './components/cart';

function App() {
  return (
   <Routes>
    <Route path='/adminPanel' element= {<AdminPanel/>}/>
    <Route path='/adminLogin' element={<AdminLogin />} />
    <Route path='/adminRegister' element={<AdminRegister />} />
    <Route path='/adminallcategories' element={<AdminAllCategories />} />
    <Route path='/adminCateProducts/:CatId' element={<AdminCateProducts/>} />
    <Route path='/adminallProducts' element={<AdminAllProducts />} />
    <Route path='/editProduct/:productId' element={<EditProduct/>} />
    <Route path='/addProducts' element={<AddProduct />} />
    <Route path='/addCategory' element={<AddCategory />} />
    <Route path='/adminViewProduct/:productId' element={<AdmiViewProduct/>} />
    <Route path='/editCategory/:categoryId' element={<EditCategory />}/>

    <Route path='/' element={<Firstpage/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/CatProducts/:CatId' element={<CatProducts/>} />
    <Route path='/viewProduct/:productId' element={<ViewProduct />} />
    <Route path='/register' element={<RegisterForm/>} />
    <Route path='/viewallcategories' element={<ViewAllCategories/>} />
   <Route path='/viewallproducts' element={<ViewAllProducts/>} />    
   </Routes>
  );
}

export default App;
