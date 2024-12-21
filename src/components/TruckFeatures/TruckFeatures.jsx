import TruckFeaturesItem from "../TruckFeaturesItem/TruckFeaturesItem.jsx";
import sprite from "../../images/sprite.svg";
import { useSelector } from "react-redux";
import css from "./TruckFeatures.module.css";
import { selectTruckById } from "../../redux/trucks/selectors.js";

const TruckFeatures = () => {
  const truck = useSelector(selectTruckById);
  return (
    <div className={css.wrapper}>
      <ul className={css.truckFeaturesWrapper}>
        {truck.transmission && (
          <TruckFeaturesItem
            icon={`${sprite}#diagram-icon`}
            text={truck.transmission}
          />
        )}

        {truck.engine && (
          <TruckFeaturesItem
            icon={`${sprite}#fuel-pump-icon`}
            text={truck.engine}
          />
        )}

        {truck.kitchen && (
          <TruckFeaturesItem icon={`${sprite}#cup-hot-icon`} text="Kitchen" />
        )}

        {truck.radio && (
          <TruckFeaturesItem icon={`${sprite}#ui-radios-icon`} text="Radio" />
        )}

        {truck.AC && (
          <TruckFeaturesItem icon={`${sprite}#wind-icon`} text="AC" />
        )}

        {truck.refrigerator && (
          <TruckFeaturesItem
            icon={`${sprite}#solar_fridge-outline-icon`}
            text="Refrigerator"
          />
        )}

        {truck.TV && <TruckFeaturesItem icon={`${sprite}#tv-icon`} text="TV" />}

        {truck.microwave && (
          <TruckFeaturesItem
            icon={`${sprite}#lucide_microwave-icon`}
            text="Microwave"
          />
        )}

        {truck.gas && (
          <TruckFeaturesItem
            icon={`${sprite}#hugeicons_gas-stove-icon`}
            text="Gas"
          />
        )}

        {truck.water && (
          <TruckFeaturesItem
            icon={`${sprite}#ion_water-outline-icon`}
            text="Water"
          />
        )}

        {truck.bathroom && (
          <TruckFeaturesItem
            icon={`${sprite}#ph_shower-icon`}
            text="Bathroom"
          />
        )}
      </ul>

      <div className={css.vehicleDetailsWrapper}>
        <p className={css.vehicleDetailsTitle}>Vehicle Details</p>
        <ul className={css.vehicleDetails}>
          <li className={css.vehicleDetailsItem}>
            <p className={css.vehicleDetailsItemTitle}>Form</p>
            <p className={css.vehicleDetailsItemText}>{truck.form}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p className={css.vehicleDetailsItemTitle}>Length</p>
            <p className={css.vehicleDetailsItemText}>{truck.length}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p className={css.vehicleDetailsItemTitle}>Width</p>
            <p className={css.vehicleDetailsItemText}>{truck.width}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p className={css.vehicleDetailsItemTitle}>Height</p>
            <p className={css.vehicleDetailsItemText}>{truck.height}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p className={css.vehicleDetailsItemTitle}>Tank</p>
            <p className={css.vehicleDetailsItemText}>{truck.tank}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p className={css.vehicleDetailsItemTitle}>Consumption</p>
            <p className={css.vehicleDetailsItemText}>{truck.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TruckFeatures;
