import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--text-color-translucent);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-dur-and-fun);

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;
export const ModalContainer = styled.div`
  position: relative;
  padding: 40px;
  margin: 20px;
  background-color: var(--white-color);
  border-radius: 24px;

  transform: scale(0);
  transition: transform var(--transition-dur-and-fun);
  max-width: 540px;

  &.active {
    transform: scale(1);
  }
`;

export const CrossWrap = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  color: var(--text-color-full);
  transition: color var(--transition-dur-and-fun);

  &:hover {
    color: var(--accent-color-full);
  }

  & svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 14px;
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-top: 14px;
  margin-bottom: 24px;
  line-height: 1.5;
`;

export const Title = styled.h2`
  font-family: ManropeMedium;
  font-size: 18px;
  margin-bottom: 8px;
`;
export const Span = styled.span`
  color: var(--accent-color);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: var(--text-color-translucent);

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  color: var(--text-color-translucent);
  font-size: 12px;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
`;
export const Description = styled.p`
  color: var(--text-color);
  margin-top: 14px;
  font-size: 14px;
  width: 90%;
`;

export const Info = styled.h3`
  font-family: ManropeMedium;
  font-size: 14px;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  font-size: 12px;
  letter-spacing: -0.24px;

  & li {
    border-radius: 35px;
    background-color: #f9f9f9;
    padding: 7px 14px;
  }
  & span {
    font-family: ManropeSemiBold;
    color: var(--accent-color);
  }
`;
