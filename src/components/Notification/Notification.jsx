import { Container } from '../Components.styled';
import { Message } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};
export default Notification;
