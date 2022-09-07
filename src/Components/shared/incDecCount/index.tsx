import { IncDec, StyledMinus, StyledPlus, Value } from "./style";

import { FC } from "react";
import { Flex } from "../";

interface Props {
  handleDecrement: () => void;
  handleIncrement: () => void;
  count?: number;
}
export const IncDecCount: FC<Props> = ({
  handleDecrement,
  handleIncrement,
  count,
}) => {
  return (
    <IncDec>
      <Flex AlItems={"center"}>
        <StyledMinus onClick={handleDecrement} />
        <Value>{count}</Value>
        <StyledPlus onClick={handleIncrement} />
      </Flex>
    </IncDec>
  );
};
