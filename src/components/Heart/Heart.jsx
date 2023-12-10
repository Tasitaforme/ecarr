import React from 'react';
import { HeartWrap } from './Heart.styled';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/cars/selectors';
import {
  addToFavorites,
  deleteFromFavorites,
} from '../../redux/cars/carsFavoritesSlice';

export default function Heart({ data }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isInFavorites = favorites.favorites.find(({ id }) => id === data.id);

  const handleToggleFavorites = () => {
    if (isInFavorites) {
      dispatch(deleteFromFavorites(data));
    } else {
      dispatch(addToFavorites(data));
    }
  };

  return (
    <HeartWrap onClick={handleToggleFavorites} $isInFavorites={isInFavorites}>
      <svg>
        <use href={sprite + '#heart-normal'}></use>
      </svg>
    </HeartWrap>
  );
}
