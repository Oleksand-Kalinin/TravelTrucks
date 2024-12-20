import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectTrucks } from "../../redux/trucks/selectors.js";
import TruckList from "../TrucksList/TruckList.jsx";

import css from "./TrucksCatalog.module.css";
import { useEffect, useState } from "react";
import { fetchTrucks } from "../../redux/trucks/operations.js";
import Loader from "../Loader/Loader.jsx";

const TrucksCatalog = () => {
  const dispatch = useDispatch();

  const trucks = useSelector(selectTrucks);
  const isLoading = useSelector(selectIsLoading);

  const [page, setPage] = useState(1);

  const handleClickLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <div className={css.wrapperCatalog}>
      {isLoading && <Loader />}
      {!isLoading && trucks && trucks.items.length === 0 && (
        <p className={css.noTrucks}>No trucks found</p>
      )}
      {!isLoading && trucks && trucks.items.length > 0 && (
        <>
          <TruckList trucks={trucks} />
          <button
            className={css.btnLoadMore}
            type="button"
            onClick={handleClickLoadMore}
          >
            Load more
          </button>
        </>
      )}
    </div>
  );
};

export default TrucksCatalog;
