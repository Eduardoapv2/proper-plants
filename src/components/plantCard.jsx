import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function PlantCard({plant}){

const { image, name } = plant;
const { addToCart } = useContext(CartContext);
    return(
        <article className="plant-card">
            <div className="plant-emoji" aria-hidden="true">{image}</div>
            <h3 className="plant-name">{name}</h3>
            <button onClick={()=> addToCart(plant.id)}>Add to cart</button>
        </article>
    );
}