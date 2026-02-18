import { Link } from "react-router-dom";
import { AppContext } from "../context/ProvideContext";
import { useContext } from "react";

function Header() {
  const { categories } = useContext(AppContext);

  return (
    <header>
      <div className="container-fluid">
        <div className="row py-3 border-bottom">

          <div className="col-sm-4 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
            <div className="d-flex align-items-center my-3 my-sm-0">
              <Link to="/">
                <img src="images/logo.svg" alt="logo" className="img-fluid" />
              </Link>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="/offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <svg width="24" height="24"><use href="/menu"></use></svg>
            </button>
          </div>

          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-4">
            <div className="search-bar row bg-light p-2 rounded-4">

              <div className="col-md-4 d-none d-md-block">
                <select className="form-select border-0 bg-transparent">
                  <option>All Categories</option>
                  {categories.map((cat, i) => (
                    <option key={i}>{cat.categoryName}</option>
                  ))}
                </select>
              </div>

              <div className="col-11 col-md-7">
                <form id="search-form" className="text-center">
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent"
                    placeholder="Search for more than 20,000 products"
                  />
                </form>
              </div>

              <div className="col-1">
                <svg width="24" height="24">
                  <use href="/search"></use>
                </svg>
              </div>

            </div>
          </div>

          <div className="col-lg-4">
            <ul className="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 justify-content-center flex-wrap align-items-center mb-0 fw-bold text-uppercase text-dark">

              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>

              <li className="nav-item active">
                <Link to="/adminLogin" className="nav-link">Admin Corner</Link>
              </li>

              <li className="nav-item active">
                <Link to="/cart" className="nav-link">Cart</Link>
              </li>

            </ul>
          </div>

          {/* ICON LINKS */}
          <div className="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
            <ul className="d-flex justify-content-end list-unstyled m-0">

              <li>
                <Link to="/" className="p-2 mx-1">
                  <svg width="24" height="24"><use href="/user"></use></svg>
                </Link>
              </li>

              <li>
                <Link to="/" className="p-2 mx-1">
                  <svg width="24" height="24"><use href="/wishlist"></use></svg>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="p-2 mx-1"
                  data-bs-toggle="offcanvas"
                  data-bs-target="/offcanvasCart"
                  aria-controls="offcanvasCart"
                >
                  <svg width="24" height="24"><use href="/shopping-bag"></use></svg>
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
