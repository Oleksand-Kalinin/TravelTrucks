import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { selectIsLoading } from "../../redux/trucks/selectors.js";

import TruckList from "../TrucksList/TruckList.jsx";
import Loader from "../Loader/Loader.jsx";

import {
  fetchTrucks,
  //   fetchTrucksNextPage,
} from "../../redux/trucks/operations.js";

import css from "./TrucksCatalog.module.css";

const TrucksCatalog = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const [searchParams] = useSearchParams();

  //   const trucks = useSelector(selectTrucks);
  const [trucks, setTrucks] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const isLoading = useSelector(selectIsLoading);

  const handleClickLoadMore = () => {
    // const nextPage = page + 1;
    setPage((prevPage) => prevPage + 1);
    // dispatch(fetchTrucksNextPage({ page: nextPage, ...allSearchParams }));
  };

  const filterSearchParams = useMemo(() => {
    setPage(1);
    setTrucks([]);
    setTotalPages(null);
    return Object.fromEntries([...searchParams]);
  }, [searchParams]);

  useEffect(() => {
    const fetchGetTrucks = async () => {
      const data = await dispatch(
        fetchTrucks({ ...filterSearchParams, page })
      ).unwrap();
      setTrucks((prevItems) => [...prevItems, ...data.items]);
      setTotalPages(data.totalPages);
    };
    fetchGetTrucks();
  }, [dispatch, page]);

  return (
    <div className={css.wrapperCatalog}>
      {isLoading && trucks.length === 0 && <Loader />}
      {trucks && trucks.length > 0 && (
        <>
          <TruckList trucks={trucks} />
          {isLoading && <Loader />}

          {page < totalPages && !isLoading && (
            <button
              className={css.btnLoadMore}
              type="button"
              onClick={handleClickLoadMore}
            >
              Load more
            </button>
          )}
        </>
      )}
      {!isLoading && trucks && trucks.length === 0 && (
        <p className={css.noTrucks}>No trucks found</p>
      )}
    </div>
  );
};

export default TrucksCatalog;
