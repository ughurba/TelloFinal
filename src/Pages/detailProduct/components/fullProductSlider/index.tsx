import React, { FC, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import styled from "styled-components";
import { Wrapper } from "./style";
export const StyledSwiper = styled(Swiper)`
  width: 500px;
  height: 400px;
  border-radius: 8px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const StyledChildSwiper = styled(Swiper)`
  height: 80px;
  width: 250px;
  .swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 {
    height: 80%;
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const MainSliderWrapper = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }
  .mySwiper2 {
    height: 80%;
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }
`;
interface Props {
  mainImg: string[];
  childImg: string[];
}

export const FullInfoShowSlider: FC<Props> = ({ mainImg, childImg }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <Wrapper>
      <MainSliderWrapper>
        <StyledSwiper
          style={{
            // @ts-ignore
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {childImg.map((item) => (
            <SwiperSlide>
              <img src={item} />
            </SwiperSlide>
          ))}
        </StyledSwiper>

        <StyledChildSwiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {childImg.map((item) => (
            <SwiperSlide>
              <img src={item} />
            </SwiperSlide>
          ))}
        </StyledChildSwiper>
      </MainSliderWrapper>
    </Wrapper>
  );
};
