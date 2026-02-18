import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

function Cart(){
  const {cart,clearCart,removeFromcart} = useContext(CartContext);

  const purchaseAll = async() => {
    const Items = cart.map(items => ({
      productId: items._id,
     purchaseQuantity: items.quantity
    }))
    try{
const response = await fetch("http://localhost:8000/api/purchased",
  {method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({Items})
  })
  const data = await response.json();
   
  if(data.success == true){

    clearCart();
    
    alert(data.message)
  }
  else{
    alert(data.message)
  }
    }
    catch(error){
console.log(error)
    }
  }
  let Amount = 0;
  let totalAmount = 0;
  
  
  return(
<div className="cart-container">
<Link  className="cart-back" to={"/"}>back</Link>

{cart.length == 0 &&
 <p>cart is empty</p>}
{cart.map((cp,index) =>
 
 
  <div className="cart-item" key={index}>
     <img src={`http://localhost:8000/uploads/${cp.productImage}`}/>
     <div className="cart-details">
     <p>{cp.productName}</p> 
     <p className="cart-price">₹{cp.productPrice}</p> 
     <p>Quantity: {cp.quantity}</p>
     <p>Amount: ₹{Amount= cp.quantity*cp.productPrice}</p>
     </div>
       <div className="cart-actions">
     <button  className="cart-remove" onClick={() => removeFromcart(index)}>remove</button> 
     </div>
     <p style={{display:"none"}}>{totalAmount += Amount}</p>
     </div>
)}

<button onClick={purchaseAll}>Purchase<p>total ₹{totalAmount }</p></button>

</div>

  )
}

export default Cart;