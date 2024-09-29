import { v4 as uuidv4 } from "uuid";
import { VehicleCard } from "./components/VehicleCard";

export const App = () => {
  const vehicles = [
    {
      id: uuidv4(),
      imageUrl:
        "https://images.unsplash.com/photo-1459603677915-a62079ffd002?q=80&w=3634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Car 1",
      description: "This is car 1",
    },
    {
      id: uuidv4(),
      imageUrl:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Car 2",
      description: "This is car 2",
    },
    {
      id: uuidv4(),
      imageUrl:
        "https://images.unsplash.com/photo-1490985830292-06e0fe60d725?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Car 3",
      description: "This is car 3",
    },
    {
      id: uuidv4(),
      imageUrl:
        "https://images.unsplash.com/photo-1494697536454-6f39e2cc972d?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Car 4",
      description: "This is car 4",
    },
  ];

  return (
    <div className="d-flex justify-content-evenly flex-wrap my-3">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} {...vehicle} />
      ))}
    </div>
  );
};
