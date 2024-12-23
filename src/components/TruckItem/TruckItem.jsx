import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import Section from "../Section/Section.jsx";
import Container from "../Container/Container.jsx";

import sprite from "../../images/sprite.svg";

import css from "./TruckItem.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectTruckById } from "../../redux/trucks/selectors.js";
import { fetchTruckById } from "../../redux/trucks/operations.js";
import BookingForm from "../BookingForm/BookingForm.jsx";
import Modal from "../Modal/Modal.jsx";
import ImageCard from "../ImageCard/ImageCard.jsx";
import { formatPrice } from "../../js/formatPrice.js";

const TruckItem = () => {
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams("id");

  const truck = useSelector(selectTruckById);

  const openModal = (img) => {
    setImg(img);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setImg(null);
  };
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };

  useEffect(() => {
    dispatch(fetchTruckById(id));
  }, [dispatch, id]);

  return (
    <Section>
      <Container>
        {truck && (
          <>
            <h3 className={css.truckTitle}>{truck.name}</h3>

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

            <p className={css.truckPrice}>&#8364;{formatPrice(truck.price)}</p>

            <div className={css.truckGallery}>
              {truck.gallery.map((item, index) => (
                <img
                  className={css.image}
                  key={index}
                  src={item.thumb}
                  alt={truck.name}
                  onClick={() => {
                    openModal(item);
                  }}
                />
              ))}
            </div>

            <p className={css.truckDescription}>{truck.description}</p>

            <div className={css.truckTabs}>
              <NavLink className={buildLinkClass} to="features">
                Features
              </NavLink>
              <NavLink className={buildLinkClass} to="reviews">
                Reviews
              </NavLink>
            </div>

            <div className={css.truckTabsContent}>
              <Outlet truck={truck} />
              <BookingForm />
            </div>
          </>
        )}

        <Modal showModal={showModal} closeModal={closeModal}>
          <ImageCard img={img} />
        </Modal>
      </Container>
    </Section>
  );
};

export default TruckItem;
