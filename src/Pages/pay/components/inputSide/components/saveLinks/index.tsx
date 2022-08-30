import { SaveLink, StyledSaveLink } from "./style";
import { FC } from "react";

interface Props {
  info?: string;
  title?: string;
  phone?: string;
}
export const SaveLinks: FC<Props> = ({ title, info, phone }) => {
  return (
      <SaveLink>
        <StyledSaveLink>{title}:</StyledSaveLink>
        {phone ? `+${phone}` : info}
      </SaveLink>
  );
};
