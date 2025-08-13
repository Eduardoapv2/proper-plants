import CartItem from "./CartItem";

export default function Cart ({items, onIncrement, onDecrement, onRemove}) {
  return(
    <section className="cart">
        <h2>My Cart</h2>
        {items.length === 0?(
            <p>Your cart is empty.</p>
        ):(
            <ul className="cart-list">
                {items.map(item =>(
                    <CartItem key={item.id} item={item}
                    onIncrement={()=> onIncrement(item.id)}
                    onDecrement={()=> onDecrement(item.id)}
                    onRemove={()=> onRemove(item.id)}/>
                ))}
            </ul>
        )}
    </section>
  ) ; 
}
