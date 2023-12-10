import { Container, TitleSecond } from '../Components.styled';

export default function TitleSection({ message }) {
  return (
    <Container>
      <TitleSecond>{message}</TitleSecond>
    </Container>
  );
}
