import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AppContext } from '../context/ProvideContext';

function ViewAllCategories () {
  const {categories} = useContext(AppContext);
  return (
    <div>
    <Link to="/" className="back-link">← Back</Link>

<div className="category-container">
  {categories.map(cat => (
    <a
      href={`/CateProducts/${cat._id}`}
      className="category-card"
      key={cat._id}
    >
      <img
        src={`https://ecomproject-2-ugy3.onrender.com/uploads/${cat.categoryImage}`}
        alt={cat.categoryName}
      />
      <h3>{cat.categoryName}</h3>
    </a>
  ))}
</div>


</div>
  );
}

export default ViewAllCategories;
