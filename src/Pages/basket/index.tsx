import { BasketItems } from "./components/basketItems";
import { Flex, Container, TotalSide } from "../../Components/shared";
import { StyledTotalSide, Wrapper } from "./style";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { minusItem, plusItem } from "../../Redux/slices/basketSlice";

export const Basket = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.basket);

  return (
    <Wrapper>
      <Container>
        <Flex JsContent={"space-between"}>
          {items.length !== 0 ? (
            <div>
              {items.map((obj) => (
                <BasketItems {...obj} />
              ))}
              <StyledTotalSide>
                <TotalSide />
              </StyledTotalSide>
            </div>
          ) : (
            <div>boshdur</div>
          )}
        </Flex>
      </Container>
    </Wrapper>
  );
};
