export default function CartItem({item, onIncrement, onDecrement, onRemove}) {
console.log("CartItem got item:", item);
const {image, name, qty} = item;
return(
    <li className="cart-item">
        <span className="cart-emoji" aria-hidden="true">{image}</span>
        <span className="cart-name">{name}</span>
        <div className="cart-qty">
            <button aria-label="decrement" onClick={onDecrement}>-</button>
            <span className="qty">{qty}</span>
            <button aria-label="increment" onClick={onIncrement}>+</button>
        </div>
        <button className="remove" onClick={onRemove} aria-label="remove">Remove</button>
    </li>
);
}