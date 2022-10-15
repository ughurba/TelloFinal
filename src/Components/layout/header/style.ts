import styled from "styled-components";

export const StyledParentInput = styled.div`
  position: relative;
  & svg {
    position: absolute;
    left: 12px;
    top: 12px;
  }
`;
export const StyledParentSvg = styled.div`
  display: flex;
  align-items: center;
  & svg {
    margin-right: ${(props) => props.theme.space[5]};
  }
`;
export const StyledBasketHeader = styled.span`
  position: relative;
`;
export const StyledSize = styled.span`
  position: absolute;
  right: 10px;
  top: -14px;
  background-color: #15f515;
  padding: 0 ${(props) => props.theme.space[1]};
  border-radius: 10px;
  font-size: ${(props) => props.theme.fontStyle.size.small};
  color: white;
  font-weight: ${(props) => props.theme.fontStyle.fontWeight.medium};
`;
export const WrapperLang = styled.div`
  width: 30px;

  display: inline-block;
  margin-left: 10px;
`;
