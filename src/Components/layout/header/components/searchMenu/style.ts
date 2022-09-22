import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  overflow-y: auto;
  height: 300px;
  position: absolute;
  width: 100%;
  z-index: 100;
  top: 100%;
  margin-top: 0.8rem;
  left: 0;
  right: 4rem;
  background: #fff;
  box-shadow: 0 1px 1px rgb(0 0 0 / 25%), 0 47px 80px rgb(0 0 0 / 11%),
    0 18.1037px 25.4815px rgb(0 0 0 / 7%), 0 3.82963px 6.51852px rgb(0 0 0 / 4%);
  border-radius: 8px;
  padding: 10px 30px;
  max-height: 45.5rem;

  &::-webkit-scrollbar {
    width: 6px;
    box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
    border-radius: 2.5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a9a9a9;
    outline: 0;
    border-radius: 2.5px;
  }
`;
export const ContentWrapper = styled.div`
  border-bottom: 1px solid rgba(194, 197, 202, 0.5);
  cursor: pointer;
  padding: 15px 0;
  display: flex;
  align-items: center;
`;
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
  font-size: 16px;
  line-height: 2.4rem;
`;
export const FontStyles = css`
  font-weight: ${(props) => props.theme.fontStyle.fontWeight.medium};
  font-size: 16px;
  line-height: 1.5;
`;
export const Price = styled.span`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.cerise};
  margin-left: 15px;
  ${FontStyles}
`;
export const OldPrice = styled.del`
  color: ${(props) => props.theme.colors.oldSilver};
  ${FontStyles}
`;
export const StyledImg = styled.img`
  width: 75px;
  height: 80px;
  object-fit: cover;
  padding: 3px;
`;
export const Content = styled.div`
  margin-left: 15px;
`;

export const StockNoStock = css`
  font-size: 15px;
  margin-left: 16px;
  font-weight: 500;
`;
export const Stock = styled.span`
  color: green;
  ${StockNoStock}
`;
export const NoStock = styled.span`
  color: red;
  ${StockNoStock}
`;
