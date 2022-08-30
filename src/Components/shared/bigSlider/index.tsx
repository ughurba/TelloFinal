import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Flex, Container } from "../";
import { StyledImg, StyledParagrpah, StyledSlider, StyledTitle } from "./style";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import { fetchSlider } from "../../../Redux/slices/sliderSlice";

export default () => {
  const { bigSlider } = useAppSelector((state) => state.slider);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSlider);
  }, [dispatch]);

  return (
    <StyledSlider>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        grabCursor={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {bigSlider.map((item) => (
          <SwiperSlide key={item.id}>
            <Container>
              <Flex AlItems={"center"} JsContent={"space-between"}>
                <div>
                  <StyledTitle>{item.title}</StyledTitle>
                  <StyledParagrpah>{item.paragraph}</StyledParagrpah>
                </div>
                <StyledImg src={item.imgUrl} />
              </Flex>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSlider>
  );
};
