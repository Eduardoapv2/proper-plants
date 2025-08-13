import { useState } from "react";
import PLANTS from "./data.js";
import PlantGrid from "./components/plantGrid.jsx";
import Cart from "./components/Cart.jsx";

export default function App() {
  const [catalog] = useState(PLANTS);
  const [cart, setCart] = useState([]);

  function addToCart (plantId){
    setCart(prev=>
      prev.some(item=>
        item.id===plantId)?prev.map(item=>
          item.id===plantId?
      {...item, qty: item.qty+1}:item):[...prev,{id:plantId,qty:1}]
    );
  }

  function increment(plantId){
    setCart(prev=>prev.map(item=>
      item.id===plantId?{...item,qty:item.qty + 1 }:item));
  }

  //decrement and remove if =<0
  function decrement(plantId){
    setCart(prev=>
      prev.map(item=>
        item.id=== plantId ? {...item, qty: item.qty - 1 }: item)
        .filter(item => item.qty > 0)
      );
  }

  function removeItem(plantId){
    setCart(prev=>
      prev.filter(item=>item.id !== plantId));
  }

  const cartItems = cart.map(item=>{
    const plant = catalog.find(p=> p.id === item.id);
    return {...item, ...plant};
  });

  return (
    <main className="app">
<h1>Proper Plants</h1>
<h3>Available plants</h3>
<div className="content">
<PlantGrid PLANTS={catalog} onAdd={addToCart}/>
<Cart
items={cartItems}
onIncrement={increment}
onDecrement={decrement}
onRemove={removeItem}/></div>

</main>
  );
}
