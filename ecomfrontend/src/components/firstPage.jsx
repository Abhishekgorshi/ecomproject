import Home from './Home';
import Header from './header'
import Just from './justArrived';
import Featured from './featured';
import Recent from './recentBlog';
import Category from './category';
import Footer from './footer';
import Popular from './popular';
import DiscountBanner from './discountBanner.jsx';
import Login from './login.jsx';
import BestSelling from './bestSelling.jsx';

function Firstpage () {
  return(
    <>
      <Header />
      <Home /> 
      <Category />
      <BestSelling/>
      <DiscountBanner/>
      <Featured />
      <Login/>
      <Popular />
      <Just/>
      <Recent />
       <Footer />
    
    </>
  );
}

export default Firstpage;