import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/ProvideContext";

function Category() {
  const { categories } = useContext(AppContext);
  const scrollRef = useRef(null);

  return (
    <section className="py-5">
      <div className="container-lg">
        <div className="section-header d-flex flex-wrap justify-content-between mb-5">
          <h2 className="section-title">Category</h2>
          <div className="d-flex align-items-center">
            <Link to={"/viewallcategories"} className="btn btn-primary me-2">View All</Link>
            <div className="swiper-buttons">
              <button
                className="swiper-prev category-carousel-prev btn btn-yellow"
                onClick={() => {
                  scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
                }}
              >
                ❮
              </button>
              <button
                className="swiper-next category-carousel-next btn btn-yellow"
                onClick={() => {
                  scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
                }}
              >
                ❯
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "20px",
            paddingBottom: "10px",
            scrollbarWidth: "none", // Firefox
          }}
          className="category-scroll"
        >
          {categories.map((cat) => (
            <Link
              key={cat._id}
              to={`/CatProducts/${cat._id}`}
              className="nav-link text-center"
              style={{
                minWidth: `calc((100% - 4 * 20px) / 5)`, // 5 items + gaps
                flexShrink: 0,
              }}
            >
              <img
                src={`https://ecomproject-2-ugy3.onrender.com/uploads/${cat.categoryImage}`}
                className="rounded-circle"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "cover",
                  margin: "0 auto",
                }}
                alt={cat.categoryName}
              />
              <h4 className="fs-6 mt-3 fw-normal">{cat.categoryName}</h4>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Category;
