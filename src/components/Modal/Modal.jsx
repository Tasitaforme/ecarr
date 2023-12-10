import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import {
  CrossWrap,
  Image,
  ModalBackdrop,
  ModalContainer,
  Span,
  TextWrap,
  Title,
  Item,
  List,
  Description,
  Info,
  ConditionsList,
} from './Modal.styled';
import sprite from '../../images/sprite.svg';
import Button from '../Button/Button';

const modalRoot = document.querySelector('#root_modal');

export default function Modal({ active, setActive, data }) {
  useEffect(() => {
    const handlerEscape = e => {
      if (e.code === 'Escape') {
        setActive(false);
      }
    };
    window.addEventListener('keydown', handlerEscape);

    return () => {
      window.removeEventListener('keydown', handlerEscape);
    };
  }, [setActive]);

  function handleCall() {
    window.location.href = 'tel:+380634767370';
  }

  return createPortal(
    <ModalBackdrop
      className={active ? 'active' : ''}
      onClick={() => setActive(false)}
    >
      <ModalContainer
        className={active ? 'active' : ''}
        onClick={e => e.stopPropagation()}
      >
        <CrossWrap
          type="button"
          aria-label="close"
          onClick={() => setActive(false)}
        >
          <svg>
            <use href={sprite + '#cross'}></use>
          </svg>
        </CrossWrap>
        <Image src={data.img} alt={data.make} width="460" />
        <TextWrap>
          <Title>
            {data.make} <Span>{data.model}, </Span>
            {data.year}
          </Title>
          <List>
            <Item>{data.address.split(',')[1]}</Item>
            <Item>{data.address.split(',')[2]}</Item>
            <Item>Id: {data.id}</Item>
            <Item>Year: {data.year}</Item>
            <Item>Type: {data.type}</Item>
          </List>
          <List>
            <Item>Fuel Consumption: {data.fuelConsumption}</Item>
            <Item>Engine Size: {data.engineSize}</Item>
          </List>
          <Description>{data.description}</Description>
          <Info>Accessories and functionalities:</Info>
          <List>
            {data.accessories.map(item => (
              <Item key={item}>{item}</Item>
            ))}
          </List>
          <List>
            {data.functionalities.map(item => (
              <Item key={item}>{item}</Item>
            ))}
          </List>
          <Info>Rental Conditions:</Info>
          <ConditionsList>
            <li>
              Minimum age:&nbsp;
              <span>{new Date().getFullYear() - data.year}</span>
            </li>
            <li>{data.rentalConditions.split('\n')[1]}</li>
            <li>{data.rentalConditions.split('\n')[2]}</li>
            <li>
              Mileage:&nbsp;
              <span>{data.mileage.toLocaleString('en-US')}</span>
            </li>
            <li>
              Price:&nbsp;<span>{data.rentalPrice}</span>
            </li>
          </ConditionsList>
        </TextWrap>
        <Button
          as="a"
          text="Rental car"
          paddingX="50px"
          width="auto"
          onClick={() => handleCall()}
        />
      </ModalContainer>
    </ModalBackdrop>,
    modalRoot,
  );
}
