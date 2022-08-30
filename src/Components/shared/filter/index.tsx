import { Flex } from "../";
import { FC, useState } from "react";
import { SubFilter } from "./subFilter";
import { Box, Line, Minus, Plus, Title, Wrapper } from "./style";

export const Filter: FC = () => {
  const [showSub, setShowSub] = useState<boolean>(true);

  return (
    <Wrapper>
      <Box>
        <Flex AlItems={"center"} JsContent={"space-between"}>
          <Title>
            Brand
            {!showSub && <SubFilter />}
          </Title>

          {showSub ? (
            <Plus onClick={() => setShowSub(false)} />
          ) : (
            <Minus onClick={() => setShowSub(true)} />
          )}
        </Flex>
        <Line />
      </Box>
    </Wrapper>
  );
};
