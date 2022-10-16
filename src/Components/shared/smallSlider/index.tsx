import { Swiper, SwiperSlide } from "swiper/react";
import { FC } from "react";
import { StyledBox, Wrapper } from "./style";
import { Container, CustomCard } from "../";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination, Mousewheel } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {
  data: any[];
  isRelated?: boolean;
}
export const SmallSlider: FC<Props> = ({ data, isRelated = false }) => {
  SwiperCore.use([Autoplay]);

  return (
    <Wrapper>
      <Container>
        <Swiper
          modules={[Pagination, Mousewheel]}
          grabCursor={true}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={isRelated ? 4 : 5}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {isRelated
            ? data.map((value) => (
                <SwiperSlide key={value.id}>
                  <StyledBox>
                    <CustomCard isfavorite={false} {...value} />
                  </StyledBox>
                </SwiperSlide>
              ))
            : data.map((value) => (
                <SwiperSlide key={value.id}>
                  <StyledBox>
                    <img src={value.imgUrl} />
                  </StyledBox>
                </SwiperSlide>
              ))}
        </Swiper>
      </Container>
    </Wrapper>
  );
};
