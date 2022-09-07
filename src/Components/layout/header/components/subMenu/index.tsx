import { StyledMenuList, Wrapper } from "./style";
import { Flex } from "../../../../shared";
import { Links } from "Routes/links";
import { useTranslation } from "react-i18next";

export const SubMenu = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Flex>
        <StyledMenuList to={Links.app.main}>{t("HomePage")}</StyledMenuList>
        <StyledMenuList to={Links.app.phone}>{t("Phones")}</StyledMenuList>
        <StyledMenuList to={Links.app.headphone}>
          {t("Headphones")}
        </StyledMenuList>
        <StyledMenuList to={"xiaomi"}>Xiaomi</StyledMenuList>
        <StyledMenuList to={"redmi"}>Redmi</StyledMenuList>
        <StyledMenuList to={"allBren"}>Bütün Brendlər</StyledMenuList>
        <StyledMenuList to={"endirim"}>Endirimlər</StyledMenuList>
      </Flex>
    </Wrapper>
  );
};
