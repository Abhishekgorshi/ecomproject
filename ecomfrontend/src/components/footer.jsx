import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="pb-4 my-4">
        <div className="container-lg">
          <div className="bg-warning pt-5 rounded-5">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-4">
                  <h2 className="mt-5">Download Organic App</h2>
                  <p>Online Orders made easy, fast and reliable</p>

                  <div className="d-flex gap-2 flex-wrap mb-5">
                    <Link to="/" title="App store">
                      <img src="images/img-app-store.png" alt="app-store" />
                    </Link>
                    <Link to="/" title="Google Play">
                      <img src="images/img-google-play.png" alt="google-play" />
                    </Link>
                  </div>
                </div>

                <div className="col-md-5">
                  <img
                    src="images/banner-onlineapp.png"
                    alt="phone"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* People looking for */}
      <section className="py-4">
        <div className="container-lg">
          <h2 className="my-4">People are also looking for</h2>

          {[
            "Blue diamon almonds",
            "Angie’s Boomchickapop Corn",
            "Salty kettle Corn",
            "Chobani Greek Yogurt",
            "Sweet Vanilla Yogurt",
            "Foster Farms Takeout Crispy wings",
            "Warrior Blend Organic",
            "Chao Cheese Creamy",
            "Chicken meatballs",
          ].map((item, i) => (
            <Link key={i} to="/" className="btn btn-warning me-2 mb-2">
              {item}
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom */}
      <div id="footer-bottom">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-6 copyright">
              <p>© 2024 Organic. All rights reserved.</p>
            </div>

            <div className="col-md-6 text-start text-md-end">
              <p>
                HTML Template by{" "}
                <a
                  href="https://templatesjungle.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  TemplatesJungle
                </a>{" "}
                Distributed By{" "}
                <a
                  href="https://themewagon.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  ThemeWagon
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer menu */}
      <footer className="py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <img src="images/logo.svg" width="240" height="70" alt="logo" />

              <div className="mt-3 d-flex gap-2">
                {["facebook", "twitter", "youtube", "instagram"].map(
                  (icon, i) => (
                    <Link key={i} to="/" className="btn btn-outline-light">
                      {icon}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="col-md-2 col-sm-6">
              <h5>Organic</h5>
              {["About us", "Conditions", "Careers"].map((item, i) => (
                <Link key={i} to="/" className="nav-link">
                  {item}
                </Link>
              ))}
            </div>

            <div className="col-md-2 col-sm-6">
              <h5>Quick Links</h5>
              {["Offers", "Coupons", "Stores"].map((item, i) => (
                <Link key={i} to="/" className="nav-link">
                  {item}
                </Link>
              ))}
            </div>

            <div className="col-md-2 col-sm-6">
              <h5>Customer Service</h5>
              {["FAQ", "Contact", "Privacy"].map((item, i) => (
                <Link key={i} to="/" className="nav-link">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
