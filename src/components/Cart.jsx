import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import  PLANTS  from "../data.js";

export default function Cart () {
 const {cart, increment, decrement, removeItem} = useContext(CartContext);
    
 const cartItems = cart.map(item =>{
    const plant = PLANTS.find(p => p.id === item.id);
    return {...item, ...plant };
 });
 
 return(
    <section className="cart">
        <h2>My Cart</h2>
        {cartItems.length === 0?(
            <p>Your cart is empty.</p>
        ):(
            <ul className="cart-list">
                {cartItems.map(item =>(
                    <CartItem key={item.id} item={item}
                    onIncrement={()=> increment(item.id)}
                    onDecrement={()=> decrement(item.id)}
                    onRemove={()=> removeItem(item.id)}/>
                ))}
            </ul>
        )}
    </section>
  ) ; 
}
