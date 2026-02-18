import { Link } from 'react-router-dom';

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
        </div>
      </div>
    </div>

    <section style={{ backgroundImage: "url('images/banner-1.jpg')",backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
      <div class="container-lg">
        <div class="row">
          <div class="col-lg-6 pt-5 mt-5">
            <h2 class="display-1 ls-1">
              <span class="fw-bold text-primary">Organic</span> Foods at your <span class="fw-bold">Doorsteps</span>
            </h2>

            <p class="fs-4">Dignissim massa diam elementum.</p>

            <div class="d-flex gap-3">
              <Link to="/" class="btn btn-primary text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">
                Start Shopping
              </Link>

              <Link to="/" class="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">
                Join Now
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>

  </>
  )
}

export default Home;
