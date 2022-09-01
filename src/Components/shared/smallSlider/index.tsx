import { Swiper, SwiperSlide } from "swiper/react";
import { fetchSlider } from "Redux/slices/sliderSlice";
import { FC, useEffect } from "react";
import { StyledBox, Wrapper } from "./style";
import { Container } from "../";
import { useAppDispatch, useAppSelector } from "Redux/hooks";

import { Pagination, Mousewheel } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const SmallSlider: FC = () => {
  const dispatch = useAppDispatch();
  const { sliderImg } = useAppSelector((state) => state.slider);

  useEffect(() => {
    dispatch(fetchSlider());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        <Swiper
          modules={[Pagination, Mousewheel]}
          grabCursor={true}
          mousewheel={true}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {sliderImg.map((value) => (
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
