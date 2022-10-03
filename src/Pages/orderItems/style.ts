import styled from "styled-components";

export const Wrapper = styled.div`
  width: 700px;
  border: 1px solid white;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 7px 13px;
  margin-top: 14px;
`;
export const StyledImg = styled.img`
  width: 50px;
  height: 72px;
`;
export const ProductContent = styled.div`
  margin-left: 25px;
`;
export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.xSmall};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.gray};
  width: 444px;
  margin-bottom: 8px;
`;
export const Color = styled.span`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.small};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.oldSilver};
  position: relative;
  top: 2px;
  display: flex;
  align-items: center;
`;
export const Storage = styled.span`
  margin-left: 25px;
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.small};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.oldSilver};
  display: flex;
  align-items: flex-end;
`;
export const NameStorage = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  top: 5px;
  justify-content: center;
  width: 53px;
  height: 27px;
  border-radius: 10px;
  cursor: pointer;
  background: #4f4f4f;
  color: white;
  margin-left: 16px;
`;
export const NameColor = styled.span<{ color?: string }>`
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.small};
  line-height: 1.3;
  border: 1px solid ${(props) => props.color};
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background: ${(props) => props.color};
  color: ${({ theme }) => theme.colors.gray};
  margin-left: 5px;
`;

export const StockPrice = styled.span`
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.medium};
  line-height: 1.2;
  margin-left: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.cerise};
`;

export const NameCount = styled.span`
  margin-left: 25px;
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontStyle.size.small};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.oldSilver};
  display: flex;
  align-items: flex-end;
`;
export const Count = styled.span`
  color: white;
  border-radius: 10px;
  padding: 5px 7px;
  font-weight: 500;
  font-size: 12px;
  position: relative;
  top: 2px;
  background: ${({ theme }) => theme.colors.gray31};
  margin: 0 8px;
`;
