import { v4 as uuidv4 } from "uuid";
import { VehicleCard } from "./components/VehicleCard";

export const App = () => {
  const vehicle = {
    id: uuidv4(),
    imageUrl:
      "https://images.unsplash.com/photo-1459603677915-a62079ffd002?q=80&w=3634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Retro Car",
    description: "Perfect for a retro vibe",
  };

  return <VehicleCard {...vehicle} />;
};
