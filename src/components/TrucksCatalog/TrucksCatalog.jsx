import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/trucks/selectors.js";
import TruckList from "../TrucksList/TruckList.jsx";

import css from "./TrucksCatalog.module.css";

const TrucksCatalog = () => {
  const trucks = useSelector(selectTrucks);

  return (
    <div className={css.wrapperCatalog}>
      <TruckList trucks={trucks} />
      Load more
    </div>
  );
};

export default TrucksCatalog;
