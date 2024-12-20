import { useSelector } from "react-redux";
import { selectTruckById } from "../../redux/trucks/selectors.js";
import css from "./TruckReviews.module.css";

import sprite from "../../images/sprite.svg";
import clsx from "clsx";

const TruckReviews = () => {
  const truck = useSelector(selectTruckById);

  const renderStarsIcon = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={clsx(css.starIcon, {
            [css.acceptFill]: i <= rating,
          })}
        >
          <use href={`${sprite}#star-icon`}></use>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className={css.reviewsWrapper}>
      {truck.reviews.length > 0 &&
        truck.reviews.map((review, index) => (
          <div key={index} className={css.review}>
            <div className={css.header}>
              <span className={css.imgFirstLetter}>
                {review.reviewer_name[0]}
              </span>
              <div className={css.authorRating}>
                <p className={css.author}>{review.reviewer_name}</p>
                <div className={css.rating}>
                  {renderStarsIcon(review.reviewer_rating)}
                </div>
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </div>
        ))}
    </div>
  );
};

export default TruckReviews;
