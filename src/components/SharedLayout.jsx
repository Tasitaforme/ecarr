import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { Loader } from './Loader';
import Footer from './Footer/Footer';
import { useDispatch } from 'react-redux';
import { getAllCars } from '../redux/cars/operationsThunks';

export default function SharedLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
