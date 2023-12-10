import { useState } from 'react';
import Button from '../Button/Button';
import {
  ItemWrap,
  ImageWrap,
  Image,
  TitleWrap,
  Title,
  Span,
  List,
  Item,
  Price,
} from './CarItem.styled';
import Heart from '../Heart/Heart';
import Modal from '../Modal/Modal';

export default function CarItem({ data }) {
  const [modalActive, setModalActive] = useState(false);
  if (modalActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <ItemWrap>
      <ImageWrap>
        <Heart data={data} />
        <Image src={data.img} alt={data.make} />
      </ImageWrap>

      <TitleWrap>
        <Title>
          {data.make}
          <Span>&nbsp;{data.model}</Span>, {data.year}
        </Title>
        <Price> {data.rentalPrice}</Price>
      </TitleWrap>

      <List>
        <Item>{data.address.split(',')[1]}</Item>
        <Item>{data.address.split(',')[2]}</Item>
        <Item>{data.rentalCompany}</Item>
        <Item>{data.type}</Item>
        <Item>{data.model}</Item>
        <Item>{data.mileage.toLocaleString('en-US')}</Item>
        <Item>{data.accessories[0]}</Item>
      </List>
      <Button
        onClick={() => {
          setModalActive(true);
        }}
        text="Learn more"
      />
      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive} data={data} />
      )}
    </ItemWrap>
  );
}
