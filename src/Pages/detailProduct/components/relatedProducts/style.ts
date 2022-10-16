import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 16px;
  margin-top: 30px;
  & .swiper-wrapper {
    min-height: 480px;
  }
  & .MuiPaper-root {
    min-height: 400px !important;
  }
  & .MuiBox-root {
    min-width: 280px;
  }
`;
export const Title = styled.h3`
  font-weight: 600;
  font-size: 40px;
  line-height: 4.8rem;
  color: #232d40;
`;
