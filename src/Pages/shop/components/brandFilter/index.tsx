import { Flex } from "Components/shared";
import { FC, FormEvent } from "react";

import { Box, Line, Title, Wrapper } from "./style";
import { Brand } from "types";
import { SubFilter } from "./subFilter";

interface Props {
  brands: Brand[];
  title: string;
  handleChange?: (ev: FormEvent<HTMLInputElement>) => void;
}
export const BrandFilter: FC<Props> = ({ brands, handleChange, title }) => {
  return (
    <Wrapper>
      <Box>
        <Flex AlItems={"center"} JsContent={"space-between"}>
          <Title>
            {title}
            {brands?.map((item) => (
              <SubFilter
                handleChange={handleChange}
                key={item.id}
                id={item.id}
                name={item.name}
              />
            ))}
          </Title>
        </Flex>
        <Line />
      </Box>
    </Wrapper>
  );
};
