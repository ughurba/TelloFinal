import styled from "styled-components";
import { CheckGreen, CheckWhite } from "../../../../Assets";
import { MyField } from "../../../../Components/shared/field";

interface Check {
  personal?: boolean;
  delivery?: boolean;
  PaymentMethod?: boolean;
}
export const StyledTextArea = styled(MyField).attrs({
  component: "textarea",
  id: "courier",
  name: "courier",
  placeholder: "Mətni daxil edin...",
  label: "Kuryer üçün əlavə qeydlər",
})`
  width: 100%;
  height: 80px;
  padding-left: 20px;
  padding-top: 15px;
  background: #f2f2f2;
  border-radius: 8px;
  border: none;
  outline: none;
  resize: none;
`;
export const SaveList = styled.ul`
  padding: 20px 0;
`;
export const StyledCheckGreen = styled(CheckGreen)`
  background: green;
  border: 1px solid green;
  border-radius: 10px;
`;
export const StyledCheckWhite = styled(CheckWhite)`
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 10px;
`;
export const WrapperLink = styled.div<Check>`
  padding: ${({ theme }) => theme.space[4]} 0px;

  &:nth-child(1) {
    border-bottom: 2px solid black;
    color: black;
  }
  &:nth-child(2) {
    border-bottom: 2px solid
      ${({ personal }) => (personal ? "black" : "#828282")};
    color: ${({ personal }) => (personal ? "black" : "#828282")};
  }
  &:last-child {
    border-bottom: none;
    color: ${({ delivery }) => (delivery ? "black" : "#828282")};
  }
`;

export const WrapperBoxInput = styled.div`
  margin-top: 30px;
`;
export const StyledButton = styled.button`
  padding: ${({ theme }) => theme.space[3]} 45px;
  margin-top: ${({ theme }) => theme.space[6]};
  border: none;
  background: #2dd06e;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
export const WrapperInput = styled.div`
  div .react-tel-input {
    margin-top: 14px;
  }
  div .react-tel-input .form-control {
    width: 279px;
    height: 48px;
    background: #f2f2f2;
    border-radius: 8px;
    border: none;
  }
`;

export const List = styled.ol`
  list-style: none;
`;
export const Link = styled.li`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  cursor: pointer;
`;
export const Title = styled.h3`
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontStyle.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontStyle.size.large};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding-bottom: ${({ theme }) => theme.space[4]};
  line-height: 1.3;
`;
export const Wrapper = styled.div`
  width: 592px;
`;
