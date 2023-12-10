import { useSelector } from 'react-redux';
import CarsList from '../../components/CarsList/CarsList';
import { selectFavorites } from '../../redux/cars/selectors';
import Hero from '../../components/HeroFavorites/Hero';
import TitleSection from '../../components/TitleSecond/TitleSecond';
import Notification from '../../components/Notification/Notification';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function FavoritesPage() {
  const navigate = useNavigate();
  const { favorites } = useSelector(selectFavorites);
  console.log(favorites);
  return (
    <main>
      <Hero />
      <TitleSection
        message={'You have selected the following cars in your favorite list:'}
      />

      {favorites.length > 0 ? (
        <CarsList data={favorites} />
      ) : (
        <>
          <Notification message={'Your favorite list is empty... WHY?'} />
          <div style={{ textAlign: 'center' }}>
            <Button
              text="Go to catalog"
              onClick={() => navigate('/catalog', { replace: true })}
              paddingX="60px"
              width="auto"
            />
          </div>
        </>
      )}
    </main>
  );
}
