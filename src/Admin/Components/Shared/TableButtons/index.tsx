import { FC } from "react";
import { StyledAddIcon, StyledDeleteIcon, StyledEditIcon } from "./style";

import { RenderButton } from "../RenderButton";

interface Props {
  onRemoveBtn?: boolean;
  onEditBtn?: boolean;
  onAddBtn?: boolean;
  textBtn?: string;
  toRouting?: string;
  titleToolTip?: string;
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
          Button={<StyledAddIcon weight="bold" />}
          titleToolTip={titleToolTip}
          toRouting={toRouting}
        />
      )}
      {onEditBtn && (
        <RenderButton
          Button={<StyledEditIcon weight="bold" />}
          titleToolTip={titleToolTip}
          toRouting={toRouting}
        />
      )}
      {onRemoveBtn && (
        <RenderButton
          Button={<StyledDeleteIcon weight="bold" />}
          titleToolTip={titleToolTip}
          toRouting={toRouting}
        />
      )}
    </>
  );
};
