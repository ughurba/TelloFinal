import { styled as MuiStyled, Button as MuiButton } from "@mui/material";
import { adminBtnLoad } from "Assets";
import { FC } from "react";

export const StyledButton = MuiStyled(MuiButton)`
  padding: 10px 30px;
  font-weight: 500;
  font-size: 18px;
  background-color: #2196f3;
  border-color: #2196f3;
  border-radius: 7px;
  color: white;
  margin-top:10px;
  &:hover{
    background: #2196f3;
  }
`;

interface Props {
  btnName: string;
  isLoading?: boolean;
}
export const Button: FC<Props> = ({ btnName, isLoading }) => {
  return (
    <>
      <StyledButton
        startIcon={
          isLoading ? <img width={40} src={adminBtnLoad} alt="d" /> : ""
        }
        type="submit"
      >
        {btnName}
      </StyledButton>
    </>
  );
};
