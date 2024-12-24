import TrucksListItem from "../TrucksListItem/TrucksListItem.jsx";
import css from "./TruckList.module.css";

const TruckList = ({ trucks }) => {
  return (
    <ul className={css.trucksList}>
      {trucks.map((truck) => (
        <TrucksListItem key={truck.id} truck={truck} />
      ))}
    </ul>
  );
};

export default TruckList;
