import styled from "styled-components";
import { CSSProperties, FC, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

export const Wrapper = styled.div``;
interface Props {
  onChange?(event: FormEvent<HTMLInputElement>): void;

  width?: string;
  height?: string;
  positionSearch?: string;
  top?: string;
  right?: string;
  left?: string;
}
export const StyledInput = styled.input<Props>`
  position: ${({ positionSearch }) => positionSearch || "static"};
  top: ${({ top }) => top || ""};
  right: ${({ right }) => right || ""};
  left: ${({ left }) => left || ""};
  width: ${({ width }) => width || "20px"};
  height: ${({ height }) => height || "20px"};
  outline: none;
  background: ${(props) => props.theme.colors.inputSearch.gray95};
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[3]};
`;

export const Search: FC<Props> = ({ ...props }, { handleSearch }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <StyledInput
        type={"search"}
        onChange={() => handleSearch}
        placeholder={t("Search")}
        {...props}
      />
    </Wrapper>
  );
};
