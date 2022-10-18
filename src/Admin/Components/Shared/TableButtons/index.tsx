import { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { PlusCircle } from "phosphor-react";

import { RenderButton } from "../RenderButton";

interface Props {
  onRemoveBtn?: boolean;
  onEditBtn?: boolean;
  onAddBtn?: boolean;
  textBtn?: string;
  toRouting?: string;
  titleToolTip: string;
}
export const TableButtons: FC<Props> = ({
  onAddBtn = false,
  onEditBtn = false,
  onRemoveBtn = false,
  toRouting,
  titleToolTip,
}) => {
  return (
    <>
      {onAddBtn && (
        <RenderButton
          Button={<PlusCircle />}
          titleToolTip={titleToolTip}
          toRouting={toRouting}
        />
      )}
      {onEditBtn && (
        <RenderButton
          Button={<EditIcon />}
          titleToolTip={titleToolTip}
          toRouting={toRouting}
        />
      )}
      {onRemoveBtn && (
        <RenderButton
          Button={<DeleteIcon />}
          titleToolTip={titleToolTip}
          toRouting={toRouting}
        />
      )}
    </>
  );
};
