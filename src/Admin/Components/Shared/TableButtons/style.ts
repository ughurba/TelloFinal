import { PlusCircle, NotePencil, Trash } from "phosphor-react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { styled, css } from "@mui/material";

const GlobalStyleIcon = css`
  margin-left: 0 5px;
  padding: 3px;
  font-size: 27px;
  color: #616161;
`;
export const StyledDeleteIcon = styled(DeleteIcon)`
  ${GlobalStyleIcon}
`;
export const StyledEditIcon = styled(EditIcon)`
  ${GlobalStyleIcon}
`;
export const StyledAddIcon = styled(AddIcon)`
  ${GlobalStyleIcon}
  padding: 0;
`;
