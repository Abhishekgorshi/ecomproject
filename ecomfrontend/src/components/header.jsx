import { Link } from "react-router-dom";
import { AppContext } from "../context/ProvideContext";
import { useContext } from "react";

function Header() {
  const {categories} = useContext(AppContext);

  return(
    <header>
      <div class="container-fluid">
        <div class="row py-3 border-bottom">
          
          <div class="col-sm-4 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
            <div class="d-flex align-items-center my-3 my-sm-0">
              <Link to={"/"}>
                <img src="images/logo.svg" alt="logo" class="img-fluid"/>
              </Link>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#menu"></use></svg>
            </button>
          </div>
          
          <div class="col-sm-6 offset-sm-2 offset-md-0 col-lg-4">
            <div class="search-bar row bg-light p-2 rounded-4">
              <div class="col-md-4 d-none d-md-block">
                <select class="form-select border-0 bg-transparent">
                  <option>All Categories</option>
             {
              categories.map(cat => 
                  <option>{cat.categoryName}</option>
              )}
                </select>
              </div>
              <div class="col-11 col-md-7">
                <form id="search-form" class="text-center" action="index.html" method="post">
                  <input type="text" class="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products"/>
                </form>
              </div>
              <div class="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <ul class="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 justify-content-center flex-wrap align-items-center mb-0 fw-bold text-uppercase text-dark">
              <li class="nav-item active">
                <Link to={"/"} class="nav-link">Home</Link>
              </li>
              <li class="nav-item active">
                <Link to="/adminLogin" class="nav-link">Admin Corner</Link>
              </li>
               <li class="nav-item active">
                <Link to="/cart" class="nav-link">Cart</Link>
              </li>
              
            </ul>
          </div>
          
          <div class="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
            <ul class="d-flex justify-content-end list-unstyled m-0">
              <li>
                <a href="#" class="p-2 mx-1">
                  <svg width="24" height="24"><use href="#user"></use></svg>
                </a>
              </li>
              <li>
                <a href="#" class="p-2 mx-1">
                  <svg width="24" height="24"><use href="#wishlist"></use></svg>
                </a>
              </li>
              <li>
                <a href="#" class="p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                  <svg width="24" height="24"><use href="#shopping-bag"></use></svg>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;