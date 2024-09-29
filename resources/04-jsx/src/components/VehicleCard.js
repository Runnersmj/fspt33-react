export const VehicleCard = () => {
  const vehicle = "Tesla";

  const getPrice = (isOnSale = false) => {
    if (isOnSale) {
      const discountPercentage = 20;

      return 30 - (30 * discountPercentage) / 100;
    }

    return 30 - (30 * 15) / 100;
  };

  const isElectric = true;

  return (
    <div>
      <h1>Vehicle: {vehicle}</h1>
      <h2>Price: €{getPrice(true)}</h2>
      <h3>Type: {isElectric ? "EV" : "FUEL"}</h3>
    </div>
  );
};
