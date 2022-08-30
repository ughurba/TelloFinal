import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import {
  Link,
  MainImgWrapper,
  StyledImg,
  StyledMainImg,
  Wrapper,
} from "./style";

interface Props {
  mainImg: string[];
  childImg: string[];
}

const Arrow = styled.div`
  background: red;
`;

export const FullInfoShowSlider: FC<Props> = ({ mainImg, childImg }) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <Link>
          <StyledImg src={childImg[i]} />
        </Link>
      );
    },

    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {mainImg.map((item, index) => (
          <MainImgWrapper key={index}>
            <StyledMainImg alt={item} src={item} />
          </MainImgWrapper>
        ))}
      </Slider>
    </Wrapper>
  );
};
