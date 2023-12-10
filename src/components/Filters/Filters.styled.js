import styled from 'styled-components';

export const FiltersWrap = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  row-gap: 50px;
  column-gap: 18px;
  margin: 0 auto 50px;
  font-family: ManropeMedium;

  & li {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  & li > p {
    font-size: 14px;
  }
`;

export const FilterBrandWrap = styled.li`
  gap: 8px;
  width: 224px;
`;

export const FilterPriceWrap = styled.li`
  gap: 8px;
  width: 125px;
`;

export const FilterMileageWrap = styled.li`
  width: 320px;
  & > div {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 8px;
  }
  & > div > div {
    width: 50%;
  }
`;
