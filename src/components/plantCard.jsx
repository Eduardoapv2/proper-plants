export default function PlantCard({plant, onAdd}){
console.log("PlantCard got plant:", plant);
const { image, name } = plant;
    return(
        <article className="plant-card">
            <div className="plant-emoji" aria-hidden="true">{image}</div>
            <h3 className="plant-name">{name}</h3>
            <button onClick={()=> onAdd(plant.id)}>Add to cart</button>
        </article>
    );
}