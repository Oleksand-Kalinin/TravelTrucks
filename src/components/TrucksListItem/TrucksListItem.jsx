import { Link } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import css from "./TrucksListItem.module.css";
import TruckFeaturesItem from "../TruckFeaturesItem/TruckFeaturesItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectTrucksFavorite } from "../../redux/trucks/selectors.js";
import {
  addFavoriteTruck,
  removeFavoriteTruck,
} from "../../redux/trucks/slice.js";
import clsx from "clsx";
import { formatPrice } from "../../js/formatPrice.js";

const TrucksListItem = ({ truck }) => {
  const dispatch = useDispatch();
  const trucksFavorite = useSelector(selectTrucksFavorite);
  const isFavorite = trucksFavorite.includes(Number(truck.id));

  const handleClickFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavoriteTruck(truck.id));
    } else {
      dispatch(addFavoriteTruck(truck.id));
    }
  };

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
              <p className={css.truckPrice}>
                &#8364;{formatPrice(truck.price)}
              </p>
              <svg
                onClick={handleClickFavorite}
                className={clsx(css.heartIcon, {
                  [css.favorite]: isFavorite,
                })}
              >
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
        <Link className={css.btnShowMore} to={`/catalog/${truck.id}/features`}>
          Show more
        </Link>
      </div>
    </li>
  );
};

export default TrucksListItem;
