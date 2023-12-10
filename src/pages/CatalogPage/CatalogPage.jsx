import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarsInfo,
  selectFilters,
  selectVisibleCars,
} from '../../redux/cars/selectors';
import { Loader } from '../../components/Loader';
import { getAllCarsByPages } from '../../redux/cars/operationsThunks';
import CarsList from '../../components/CarsList/CarsList';
import { LoadMore } from '../../components/LoadMore.styled';
import Filters from '../../components/Filters/Filters';
import Notification from '../../components/Notification/Notification';
import HeroCatalog from '../../components/HeroCatalog/HeroCatalog';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const { items: cars, isLoading, error } = useSelector(selectCarsInfo);
  const { isFiltered } = useSelector(selectFilters);

  const [currentPage, setCurrentPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [allCars, setAllCars] = useState(null);

  useEffect(() => {
    dispatch(getAllCarsByPages(currentPage));
    setShowLoadMore(currentPage < 3);
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 1) return setAllCars(cars);
    setAllCars(prev => [...prev, ...cars]);
  }, [cars]);

  const filteredCars = useSelector(selectVisibleCars);

  const handlerLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <main>
      <HeroCatalog />
      <Filters />

      {isFiltered ? (
        filteredCars !== null && filteredCars.length > 0 ? (
          <CarsList data={filteredCars} />
        ) : (
          <Notification
            message={'No match find... Try another filter options...'}
          />
        )
      ) : (
        <CarsList data={allCars} />
      )}

      {isLoading && <Loader />}
      {error && <Notification message={error} />}
      {cars && showLoadMore && !isFiltered && (
        <LoadMore onClick={handlerLoadMore}>Load more</LoadMore>
      )}
    </main>
  );
}
