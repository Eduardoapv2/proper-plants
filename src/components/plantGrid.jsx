import PlantCard from "./plantCard";

export default function PlantGrid({PLANTS, onAdd}){
    return (
        <section className="plant-grid">
            {PLANTS.map(plant =>(<PlantCard key={plant.id} plant={plant} onAdd={onAdd}/>
        ))}
        </section>
    );
}