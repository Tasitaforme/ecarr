import React, { useEffect, useState } from 'react';
import { Container } from '../Components.styled';
import CreatableSelect from 'react-select/creatable';

import {
  FilterBrandWrap,
  FilterMileageWrap,
  FilterPriceWrap,
  FiltersWrap,
} from './Filters.styled';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetFilters,
  setBrandFilter,
  setMileageFrom,
  setMileageTo,
  setPriceFilter,
} from '../../redux/cars/carsFilterSlice';
import { selectCarsInfo } from '../../redux/cars/selectors';

export default function Filters() {
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMileageFrom, setSelectedMileageFrom] = useState(null);
  const [selectedMileageTo, setSelectedMileageTo] = useState(null);

  const { itemsAll: carsAll } = useSelector(selectCarsInfo);

  const makeUniqueValues = (data, value) => {
    if (!value) {
      return;
    }
    const values = [...new Set(data.map(item => item[value]))];
    return values;
  };

  const formatValues = data => {
    const values = data.map(item => item.split('$')[1]);
    return values;
  };
  const brandValues = makeUniqueValues(carsAll, 'make');
  const priceValues = makeUniqueValues(carsAll, 'rentalPrice');
  const formattedPriceValues = formatValues(priceValues);

  const makeOptions = data => {
    const values = [...data.map(item => ({ value: item, label: item }))];
    return values;
  };

  const brandOptions = makeOptions(brandValues);
  const priceOptions = makeOptions(formattedPriceValues);

  const mileageOptions = [];
  for (let i = 2000; i <= 10000; i += 1000) {
    mileageOptions.push({ value: i, label: `${i}` });
  }

  useEffect(() => {
    if (selectedBrand) dispatch(setBrandFilter(selectedBrand.value));
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedPrice) dispatch(setPriceFilter(selectedPrice.value));
  }, [selectedPrice]);

  useEffect(() => {
    if (selectedMileageFrom)
      dispatch(setMileageFrom(selectedMileageFrom.value));
  }, [selectedMileageFrom]);

  useEffect(() => {
    if (selectedMileageTo) dispatch(setMileageTo(selectedMileageTo.value));
  }, [selectedMileageTo]);

  const handleReset = () => {
    setSelectedBrand(null);
    setSelectedPrice(null);
    setSelectedMileageFrom(null);
    setSelectedMileageTo(null);
    dispatch(resetFilters());
  };

  return (
    <Container>
      <FiltersWrap>
        <FilterBrandWrap>
          <p>Car brand</p>
          <CreatableSelect
            isClearable
            placeholder="Enter the text"
            options={brandOptions}
            value={selectedBrand}
            onChange={setSelectedBrand}
          />
        </FilterBrandWrap>

        <FilterPriceWrap>
          <p>Price/ 1 hour</p>
          <CreatableSelect
            options={priceOptions}
            placeholder="To $"
            value={selectedPrice}
            onChange={setSelectedPrice}
          />
        </FilterPriceWrap>
        <FilterMileageWrap>
          <p>Сar mileage / km</p>
          <div>
            <CreatableSelect
              options={mileageOptions}
              placeholder="From"
              value={selectedMileageFrom}
              onChange={setSelectedMileageFrom}
            />
            <CreatableSelect
              options={mileageOptions}
              placeholder="To"
              value={selectedMileageTo}
              onChange={setSelectedMileageTo}
            />
          </div>
        </FilterMileageWrap>

        <Button
          type="button"
          text="Reset"
          onClick={handleReset}
          paddingX="44px"
          width="auto"
        />
      </FiltersWrap>
    </Container>
  );
}
