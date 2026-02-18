import {Link} from 'react-router-dom';

function Home(){
  return(
    <>

    <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasCart">
      <div class="offcanvas-header justify-content-center">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">Your cart</span>
            <span class="badge bg-primary rounded-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Growers cider</h6>
                <small class="text-body-secondary">Brief description</small>
              </div>
              <span class="text-body-secondary">$12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Fresh grapes</h6>
                <small class="text-body-secondary">Brief description</small>
              </div>
              <span class="text-body-secondary">$8</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Heinz tomato ketchup</h6>
                <small class="text-body-secondary">Brief description</small>
              </div>
              <span class="text-body-secondary">$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
  
          <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </div>
      </div>
    </div>
    
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">

      <div class="offcanvas-header justify-content-between">
        <h4 class="fw-normal text-uppercase fs-6">Menu</h4>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">
    
        <ul class="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
          <li class="nav-item border-dashed active">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  width="24"
  height="24"
>
  <path d="M12 21s-6.7-4.35-9.33-7.28C.73 11.5 1.1 8.28 3.4 6.7c2.02-1.38 4.5-.86 5.9.67L12 10l2.7-2.63c1.4-1.53 3.88-2.05 5.9-.67 2.3 1.58 2.67 4.8.73 7.02C18.7 16.65 12 21 12 21z" />
</svg>
 <Link to="/fruits"></Link>
              <span>Fruits and vegetables</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#dairy"></use></svg>
              <span>Dairy and Eggs</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#meat"></use></svg>
              <span>Meat and Poultry</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#seafood"></use></svg>
              <span>Seafood</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#bakery"></use></svg>
              <span>Bakery and Bread</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#canned"></use></svg>
              <span>Canned Goods</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#frozen"></use></svg>
              <span>Frozen Foods</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#pasta"></use></svg>
              <span>Pasta and Rice</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#breakfast"></use></svg>
              <span>Breakfast Foods</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#snacks"></use></svg>
              <span>Snacks and Chips</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <button class="btn btn-toggle dropdown-toggle position-relative w-100 d-flex justify-content-between align-items-center text-dark p-2" data-bs-toggle="collapse" data-bs-target="#beverages-collapse" aria-expanded="false">
              <div class="d-flex gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24"><use href="#beverages"></use></svg>
                <span>Beverages</span>
              </div>
            </button>
            <div class="collapse" id="beverages-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal ps-5 pb-1">
                <li class="border-bottom py-2"><a href="/home" class="dropdown-item">Water</a></li>
                <li class="border-bottom py-2"><a href="/home" class="dropdown-item">Juice</a></li>
                <li class="border-bottom py-2"><a href="/home" class="dropdown-item">Soda</a></li>
                <li class="border-bottom py-2"><a href="/home" class="dropdown-item">Tea</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#spices"></use></svg>
              <span>Spices and Seasonings</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#baby"></use></svg>
              <span>Baby Food and Formula</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#health"></use></svg>
              <span>Health and Wellness</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#household"></use></svg>
              <span>Household Supplies</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#personal"></use></svg>
              <span>Personal Care</span>
            </a>
          </li>
          <li class="nav-item border-dashed">
            <a href="/home" class="nav-link d-flex align-items-center gap-3 text-dark p-2">
              <svg width="24" height="24" viewBox="0 0 24 24"><use href="#pet"></use></svg>
              <span>Pet Food and Supplies</span>
            </a>
          </li>
        </ul>
      
      </div>

    </div>

    
    <section style={{ backgroundImage: "url('images/banner-1.jpg')",backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
      <div class="container-lg">
        <div class="row">
          <div class="col-lg-6 pt-5 mt-5">
            <h2 class="display-1 ls-1"><span class="fw-bold text-primary">Organic</span> Foods at your <span class="fw-bold">Doorsteps</span></h2>
            <p class="fs-4">Dignissim massa diam elementum.</p>
            <div class="d-flex gap-3">
              <a href="#" class="btn btn-primary text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">Start Shopping</a>
              <a href="#" class="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">Join Now</a>
            </div>
            <div class="row my-5">
              <div class="col">
                <div class="row text-dark">
                  <div class="col-auto"><p class="fs-1 fw-bold lh-sm mb-0">14k+</p></div>
                  <div class="col"><p class="text-uppercase lh-sm mb-0">Product Varieties</p></div>
                </div>
              </div>
              <div class="col">
                <div class="row text-dark">
                  <div class="col-auto"><p class="fs-1 fw-bold lh-sm mb-0">50k+</p></div>
                  <div class="col"><p class="text-uppercase lh-sm mb-0">Happy Customers</p></div>
                </div>
              </div>
              <div class="col">
                <div class="row text-dark">
                  <div class="col-auto"><p class="fs-1 fw-bold lh-sm mb-0">10+</p></div>
                  <div class="col"><p class="text-uppercase lh-sm mb-0">Store Locations</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row row-cols-1 row-cols-sm-3 row-cols-lg-3 g-0 justify-content-center">
          <div class="col">
            <div class="card border-0 bg-primary rounded-0 p-4 text-light">
              <div class="row">
                <div class="col-md-3 text-center">
                  <svg width="60" height="60"><use href="#fresh"></use></svg>
                </div>
                <div class="col-md-9">
                  <div class="card-body p-0">
                    <h5 class="text-light">Fresh from farm</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0 bg-secondary rounded-0 p-4 text-light">
              <div class="row">
                <div class="col-md-3 text-center">
                  <svg width="60" height="60"><use href="#organic"></use></svg>
                </div>
                <div class="col-md-9">
                  <div class="card-body p-0">
                    <h5 class="text-light">100% Organic</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0 bg-danger rounded-0 p-4 text-light">
              <div class="row">
                <div class="col-md-3 text-center">
                  <svg width="60" height="60"><use href="#delivery"></use></svg>
                </div>
                <div class="col-md-9">
                  <div class="card-body p-0">
                    <h5 class="text-light">Free delivery</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </section>

  </>
  )
}

export default Home;