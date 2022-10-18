import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Flex, Container } from "../";
import { StyledImg, StyledParagrpah, StyledSlider, StyledTitle } from "./style";

export const BigSlider = () => {
  return (
    <>
      <StyledSlider>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <Container>
              <Flex AlItems={"center"} JsContent={"space-between"}>
                <div>
                  <StyledTitle>Buy & Sell What's Now & Next</StyledTitle>
                  <StyledParagrpah>
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    Felis malesuada et leo faucibus Lorem ipsum dolor sit
                    amet,consectetur adipiscing elit. Felis malesuada et leo
                    faucibus
                  </StyledParagrpah>
                </div>
                <StyledImg src={"https://i.ibb.co/PjC15Cg/Slider-Phone.png"} />
              </Flex>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>
              <Flex AlItems={"center"} JsContent={"space-between"}>
                <div>
                  <StyledTitle>Buy & Sell What's Now & Next</StyledTitle>
                  <StyledParagrpah>
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    Felis malesuada et leo faucibus Lorem ipsum dolor sit
                    amet,consectetur adipiscing elit. Felis malesuada et leo
                    faucibus
                  </StyledParagrpah>
                </div>
                <StyledImg src={"https://i.ibb.co/PjC15Cg/Slider-Phone.png"} />
              </Flex>
            </Container>
          </SwiperSlide>
        </Swiper>
      </StyledSlider>
    </>
  );
};
