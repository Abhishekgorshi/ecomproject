import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({children}){
 const [cart,setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart):[];
 });

 const addTocart = (product,purchaseQuantity) => (

  setCart((preCart => {
                 const isExist = preCart.find(item => (
                    item &&  item._id === product._id)); 
                     if(isExist){
                          return preCart.map((item => { 
                            if(!item) return item;
                             if(item._id === product._id){
                              return{ ...item,  quantity : item.quantity+purchaseQuantity
                        }}
    
                        return item
                     }))
               }
              return [...preCart,{...product,quantity:purchaseQuantity}]
      }))
     )
 
 useEffect(() => {
   localStorage.setItem("cart",JSON.stringify(cart))
  },[cart]);
  
  const removeFromcart = (index) => (
    setCart(prevProduct => prevProduct.filter((item,itemIndex) => itemIndex !== index)
  ));

  const clearCart = () => {
    setCart([])
    localStorage.setItem("cart",[])
  }

   return(
<CartContext.Provider value={{cart ,setCart, addTocart,clearCart, removeFromcart}}>
{children}
</CartContext.Provider>
  )
}
export default CartProvider;