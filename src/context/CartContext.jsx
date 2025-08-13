import { createContext, useContext, useState} from "react";

export const CartContext = createContext();

export function CartProvider ({children}) {
    const [cart, setCart] = useState([]);

    function addToCart(plantId){
        setCart(prev =>
            prev.some(item => item.id === plantId)
            ? prev.map(item =>
                item.id === plantId ? {...item, qty: item.qty + 1} : item)
           :[...prev, {id: plantId, qty: 1 }]
            );
    }

    function increment (plantId) {
        setCart(prev =>
            prev.map(item =>
                item.id === plantId ? {...item, qty: item.qty + 1 } : item)
        );
    }

    function decrement (plantId) {
        setCart(prev =>
            prev.map(item =>
                item.id === plantId ? {...item, qty: item.qty - 1 } : item)
                .filter(item => item.qty > 0)
        );
    }

    function removeItem (plantId) {
        setCart(prev => prev.filter(item => item.id !== plantId));
 }
 return (
    <CartContext.Provider value={{cart, addToCart, increment, decrement, removeItem}}>
        {children}</CartContext.Provider>
 );
}