import { FC, useState } from "react";
import { Box, Minus, Paragraph, Plus, SubParagraph } from "./style";

export const DropQuestion: FC = () => {
  const [showSub, setShowSub] = useState<boolean>(false);
  return (
    <Box>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet
        egestas ?
        {showSub && (
          <SubParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed
            at nunc viverra fermentum diam aliquam. Placerat urna, varius
            vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum
            amet, amet. Nisi, id magnis tellus ut.
            ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans
          </SubParagraph>
        )}
      </Paragraph>
      {showSub ? (
        <Minus onClick={() => setShowSub(!showSub)} />
      ) : (
        <Plus onClick={() => setShowSub(!showSub)} />
      )}
    </Box>
  );
};
