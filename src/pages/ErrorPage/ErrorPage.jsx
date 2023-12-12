import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Section, Left, Content, Title404, Text404 } from './ErrorPage.styled';

import Button from '../../components/Button/Button';
import { Container } from '../../components/Components.styled';

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <Section>
        <Left>
          <Content>
            <Title404>404</Title404>
            <Text404>
              Sorry, you have reached a page that we could not find.
              <br /> <br />
              Perhaps this page went on vacation or decided to disappear into
              another dimension. We apologize for this inconvenience.
            </Text404>
            <Button
              text="Go home"
              type="button"
              paddingX="50px"
              width="auto"
              onClick={handleClick}
            />
          </Content>
        </Left>
      </Section>{' '}
    </Container>
  );
}
