import { Tooltip } from "@mui/material";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  Button: ReactNode;
  toRouting?: string;
  titleToolTip?: string;
}
export const RenderButton: FC<Props> = ({
  Button,
  titleToolTip,
  toRouting,
}) => {
  return (
    <Tooltip title={titleToolTip ? titleToolTip : ""}>
      {toRouting ? <Link to={toRouting}>{Button}</Link> : <>{Button}</>}
    </Tooltip>
  );
};
