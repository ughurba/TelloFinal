import { BasketItems } from "./components/basketItems";
import { Flex, Container, TotalSide } from "Components/shared";
import { StyledTotalSide, Wrapper } from "./style";
import { useAppSelector } from "Redux/hooks";

export const Basket = () => {
  const { basketItems, total } = useAppSelector((state) => state.basket.basket);

  return (
    <Wrapper>
      <Container>
        {basketItems?.length !== 0 ? (
          <Flex JsContent={"space-between"}>
            <div>
              {basketItems?.map((obj) => (
                <BasketItems key={obj.id} {...obj} />
              ))}
            </div>
            <StyledTotalSide>
              <TotalSide total={total} />
            </StyledTotalSide>
          </Flex>
        ) : (
          <div>boshdur</div>
        )}
      </Container>
    </Wrapper>
  );
};
