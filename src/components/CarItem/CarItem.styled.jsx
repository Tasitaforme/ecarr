import styled from 'styled-components';

export const ItemWrap = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 274px;
  height: 426px;
`;

export const ImageWrap = styled.div`
  display: inline-block;
  position: relative;
  background-color: aqua;
  margin-bottom: 14px;
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  line-height: 1.5;
  background: var(--linear-gradient);
  width: 274px;
  height: 268px;
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 268px;
  object-fit: cover;
  z-index: -1;
`;

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--text-color-full);
  font-family: ManropeMedium;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-size: 16px;
`;

export const Span = styled.span`
  color: var(--accent-color);
  font-size: 16px;
`;

export const Price = styled.p`
  color: var(--text-color-ful);
  font-size: 16px;
  margin-left: auto;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 4px;
  margin-bottom: 28px;
  height: 36px;
  overflow: hidden;
  color: var(--text-color-translucent);
  font-family: ManropeRegular;
`;

export const Item = styled.li`
  color: var(--text-color-translucent);
  font-size: 12px;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
`;
