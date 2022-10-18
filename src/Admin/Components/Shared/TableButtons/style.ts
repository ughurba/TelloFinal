import { PlusCircle, NotePencil, Trash } from "phosphor-react";
import styled, { css } from "styled-components";

const GlobalStyleIcon = css`
  color: #0360c4;
  margin-left: 0 5px;
  padding: 3px;
  font-size: 23px;
`;
export const StyledDeleteIcon = styled(Trash)`
  ${GlobalStyleIcon}
`;
export const StyledEditIcon = styled(NotePencil)`
  ${GlobalStyleIcon}
`;
export const StyledAddIcon = styled(PlusCircle)`
  ${GlobalStyleIcon}
  padding: 0;
`;
