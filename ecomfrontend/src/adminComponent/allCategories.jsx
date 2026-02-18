import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AppContext } from '../context/ProvideContext';

function AdminAllCategories () {
  const {categories} = useContext(AppContext);
  return (
    <div>
      <Link to="/adminPanel" class="back-link">← Back</Link>
<div style={{paddingTop:"100px"}}>
  <div class="category-container">
    { categories.map(cat => (
      <Link to={`/adminCateProducts/${ cat._id}`} class="category-card">
        <img src={`https://ecomproject-2-ugy3.onrender.com/uploads/${ cat.categoryImage }`} alt={`${ cat.categoryName }`}/>
        <h3>{ cat.categoryName }</h3>
        <Link to={`/editCategory/${cat._id}`}>edit</Link>
      </Link>
     ))}
  </div>

  <Link to="/addCategory" class="add-category">+ Add new category</Link>
    </div>
</div>
  );
}

export default AdminAllCategories;
