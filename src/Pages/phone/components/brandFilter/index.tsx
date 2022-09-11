import { Flex } from "Components/shared";
import { FC, useState } from "react";
import { SubFilter } from "./subFilter";
import { Box, Line, Minus, Plus, Title, Wrapper } from "./style";
import { Brand } from "types";

interface Props {
  brands: Brand[];
  title: string;
}
export const BrandFilter: FC<Props> = ({ brands, title }) => {
  const [showSub, setShowSub] = useState<boolean>(true);
  return (
    <Wrapper>
      <Box>
        <Flex AlItems={"center"} JsContent={"space-between"}>
          <Title>
            {title}
            {!showSub &&
              brands?.map((item) => (
                <SubFilter key={item.id} id={item.id} name={item.name} />
              ))}
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
