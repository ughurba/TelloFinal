import styled from "styled-components";

export const StyledParagrpah = styled.p`
  margin-top: ${(props) => props.theme.space[4]};
  width: 800px;
  font-weight: ${(props) => props.theme.fontStyle.fontWeight.normal};
  font-size: ${(props) => props.theme.fontStyle.size.medium};
  line-height: 1.5;
  color: ${(props) => props.theme.colors.gray31};
`;
export const StyledImg = styled.img`
  width: 463px;
`;
export const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontStyle.size.xxLarge};
  line-height: 90px;
  width: 450px;
`;
export const StyledSlider = styled.div`
  margin-top: ${(props) => props.theme.space[6]};

  background: rgba(134, 248, 195, 1);
  background: linear-gradient(
    to right,
    rgba(134, 248, 195, 1),
    rgba(232, 251, 27, 1)
  );
`;
