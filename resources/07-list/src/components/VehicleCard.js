import "./VehicleCard.css";

export const VehicleCard = (props) => {
  return (
    <div className="card vehicle-card m-2">
      <img src={props.imageUrl} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
};
