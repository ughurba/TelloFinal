import React, { FC, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import {
  Wrapper,
  MainSliderWrapper,
  StyledSwiper,
  StyledChildSwiper,
} from "./style";
import styled from "styled-components";

interface Props {
  childImg: string[];
}
export const StyledChildImg = styled.img`
  height: 80px !important;
  object-fit: contain !important;
`;
export const StyledMainImg = styled.img`
  object-fit: contain !important;
`;
export const FullInfoShowSlider: FC<Props> = ({ childImg }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <Wrapper>
      <MainSliderWrapper>
        <StyledSwiper
          style={{
            // @ts-ignore
            "--swiper-navigation-color": "black",
            "--swiper-pagination-color": "black",
          }}
          loop={true}
          grabCursor={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {childImg.map((item, i) => (
            <SwiperSlide key={i}>
              <StyledMainImg src={item} />
            </SwiperSlide>
          ))}
        </StyledSwiper>

        <StyledChildSwiper
          grabCursor={true}
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {childImg.map((item, i) => (
            <SwiperSlide key={i}>
              <StyledChildImg src={item} />
            </SwiperSlide>
          ))}
        </StyledChildSwiper>
      </MainSliderWrapper>
    </Wrapper>
  );
};
