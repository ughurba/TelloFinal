import { Flex } from "Components/shared";
import { FC } from "react";

import { Box, Line, Title, Wrapper } from "./style";
import { Brand } from "types";
import { SubFilter } from "./subFilter";

interface Props {
  brands: Brand[];
  title: string;
}
export const BrandFilter: FC<Props> = ({ brands, title }) => {
  return (
    <Wrapper>
      <Box>
        <Flex AlItems={"center"} JsContent={"space-between"}>
          <Title>
            {title}
            {brands?.map((item) => (
              <SubFilter key={item.id} id={item.id} name={item.name} />
            ))}
          </Title>
        </Flex>
        <Line />
      </Box>
    </Wrapper>
  );
};
