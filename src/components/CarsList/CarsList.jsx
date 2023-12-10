import { ListWrap } from './CarsList.styled';
import CarItem from '../CarItem/CarItem';
import { Container } from '../Components.styled';

export default function CarsList({ data }) {
  return (
    <Container>
      {data && (
        <ListWrap>
          {data.map((car, index) => (
            <CarItem key={index} data={car} />
          ))}
        </ListWrap>
      )}
    </Container>
  );
}
