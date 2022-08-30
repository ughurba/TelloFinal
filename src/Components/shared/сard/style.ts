import styled, { css } from "styled-components";

export const StyledBox = styled.div`
  border: 1px solid white;
  box-shadow: 0px 4px 24px rgba(130, 130, 130, 0.16);
  border-radius: 8px;
  padding: ${(props) => props.theme.space[5]};
  height: 360px;
  width: 286px;
`;
export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const StyledImgBox = styled.div`
  width: 110px;
  height: 210px;
`;
export const FontStyles = css`
  color: ${(props) => props.theme.colors.gray};
  font-weight: ${(props) => props.theme.fontStyle.fontWeight.medium};
  font-size: ${(props) => props.theme.fontStyle.size.medium};
  line-height: 1.5;
`;
export const StyledTitle = styled.h4`
  margin-top: ${(props) => props.theme.space[4]};
  ${FontStyles}
`;
export const StyledPrice = styled.span`
  display: inline-block;
  margin-top: ${(props) => props.theme.space[3]};
  ${FontStyles}
`;
export const StyledWrapper = styled.div`
  margin-left: ${(props) => props.theme.space[5]};

  &:nth-child(1) {
    margin-left: 0;
  }
`;
