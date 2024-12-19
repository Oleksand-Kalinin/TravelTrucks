import { Link } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import css from "./TrucksListItem.module.css";
import TruckFeaturesItem from "../TruckFeaturesItem/TruckFeaturesItem.jsx";

const TrucksListItem = ({ truck }) => {
  console.log(truck);
  return (
    <li className={css.trucksListItem}>
      <img
        className={css.image}
        src={truck.gallery[0].thumb}
        alt={truck.name}
        width="292"
        height="320"
      />
      <div className={css.truckWrapper}>
        <div className={css.truckInfo}>
          <div className={css.truckTitleWrapper}>
            <h3 className={css.truckTitle}>{truck.name}</h3>

            <div className={css.truckPriceWrapper}>
              <p className={css.truckPrice}>&#8364;{truck.price}.00</p>
              <svg className={css.heartIcon}>
                <use href={`${sprite}#heart-icon`}></use>
              </svg>
            </div>
          </div>

          <div className={css.truckRatingLocation}>
            <div className={css.truckRating}>
              <svg className={css.starIcon}>
                <use href={`${sprite}#star-icon`}></use>
              </svg>
              <p>
                {truck.rating}({truck.reviews.length} Reviews)
              </p>
            </div>

            <div className={css.truckLocation}>
              <svg className={css.mapIcon}>
                <use href={`${sprite}#map-icon`}></use>
              </svg>
              <p>{truck.location}</p>
            </div>
          </div>

          <p className={css.truckDescription}>{truck.description}</p>
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
              <TruckFeaturesItem
                icon={`${sprite}#cup-hot-icon`}
                text="Kitchen"
              />
            )}

            {truck.AC && (
              <TruckFeaturesItem icon={`${sprite}#wind-icon`} text="AC" />
            )}

            {truck.TV && (
              <TruckFeaturesItem icon={`${sprite}#tv-icon`} text="TV" />
            )}

            {truck.bathroom && (
              <TruckFeaturesItem
                icon={`${sprite}#ph_shower-icon`}
                text="Bathroom"
              />
            )}
          </ul>
        </div>
        <Link className={css.btnShowMore} to={`/catalog/${truck.id}`}>
          Show more
        </Link>
      </div>
    </li>
  );
};

export default TrucksListItem;
