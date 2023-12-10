import { useEffect, useState } from 'react';
import CarsList from '../../components/CarsList/CarsList';
import Hero from '../../components/HeroHome/Hero';
import { Loader } from '../../components/Loader';
import { getAllCars } from '../../redux/cars/operationsThunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsInfo } from '../../redux/cars/selectors';
import TitleSection from '../../components/TitleSecond/TitleSecond';
import Notification from '../../components/Notification/Notification';

export default function HomePage() {
  const { itemsAll: carsAll, isLoading, error } = useSelector(selectCarsInfo);

  return (
    <main>
      <Hero />
      <TitleSection message={'These cars can be yours in a minute:'} />
      {isLoading && <Loader />}
      {error && <Notification message={error} />}
      <CarsList data={carsAll.slice(0, 4)} />
    </main>
  );
}
