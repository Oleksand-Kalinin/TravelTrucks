import css from "./TruckFeaturesItem.module.css";
const TruckFeaturesItem = ({ icon, text }) => {
  return (
    <li className={css.truckFeaturesItem}>
      <svg className={css.icon}>
        <use href={icon}></use>
      </svg>
      <p className={css.text}>{text}</p>
    </li>
  );
};

export default TruckFeaturesItem;
