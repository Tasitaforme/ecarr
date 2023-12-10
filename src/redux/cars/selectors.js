import { createSelector } from '@reduxjs/toolkit';
export const selectCarsInfo = state => state.cars;
export const selectCars = state => state.cars.items;
export const selectCarsAll = state => state.cars.itemsAll;

export const selectFavorites = state => state.favorites;

export const selectFilters = state => state.filters;
export const selectBrandFilter = state => state.filters.brand;
export const selectPriceFilter = state => state.filters.price;
export const selectMileageFrom = state => state.filters.mileageFrom;
export const selectMileageTo = state => state.filters.mileageTo;

export const selectVisibleCars = createSelector(
  [
    selectCarsAll,
    selectBrandFilter,
    selectPriceFilter,
    selectMileageFrom,
    selectMileageTo,
  ],
  (itemsAll, brand, price, mileageFrom, mileageTo) => {
    let filteredCars = [...itemsAll];
    if (brand) {
      filteredCars = filteredCars.filter(({ make }) =>
        make.toLowerCase().includes(brand.toLowerCase()),
      );
    }
    if (price) {
      filteredCars = filteredCars.filter(({ rentalPrice }) =>
        rentalPrice.split('$')[1].includes(price),
      );
    }
    if (mileageFrom) {
      filteredCars = filteredCars.filter(
        ({ mileage }) => mileage >= mileageFrom,
      );
    }
    if (mileageTo) {
      filteredCars = filteredCars.filter(({ mileage }) => mileage <= mileageTo);
    }
    if (itemsAll.length == filteredCars.length) {
      return null;
    }
    return filteredCars;
  },
);
