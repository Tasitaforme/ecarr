import { Btn } from './Button.styled';

export default function Button({ text, onClick, paddingX, width }) {
  return (
    <Btn onClick={onClick} style={{ paddingInline: paddingX, width }}>
      {text}
    </Btn>
  );
}
