import styled from "styled-components";
import { Trash } from "phosphor-react";

export const Wrapper = styled.div`
  width: 904px;
  border: 1px solid white;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 7px 13px;
`;
export const StyledImg = styled.img`
  width: 50px;
  height: 72px;
`;
export const ProductContent = styled.div``;
export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.gray};
  width: 444px;
`;
export const Color = styled.span`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.small};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.oldSilver};
`;
export const NameColor = styled.span`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.small};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Discount = styled.s`
  color: ${({ theme }) => theme.colors.oldSilver};
  margin-left: 32px;
`;

export const StockPrice = styled.span`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.medium};
  line-height: 1.2;
  margin-left: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.cerise};
`;
export const StyledTrash = styled(Trash)`
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: red;
  }
`;
