import { StyledMenuList, Wrapper } from "./style";
import { Flex } from "../../../../shared";
import { Links } from "Routes/links";

export const SubMenu = () => {
  return (
    <Wrapper>
      <Flex>
        <StyledMenuList to={Links.app.main}>Ana səhifə</StyledMenuList>
        <StyledMenuList to={Links.app.phone}>Telefonlar</StyledMenuList>
        <StyledMenuList to={Links.app.headphone}>Aksessuarlar</StyledMenuList>
        <StyledMenuList to={"xiaomi"}>Xiaomi</StyledMenuList>
        <StyledMenuList to={"redmi"}>Redmi</StyledMenuList>
        <StyledMenuList to={"allBren"}>Bütün Brendlər</StyledMenuList>
        <StyledMenuList to={"endirim"}>Endirimlər</StyledMenuList>
      </Flex>
    </Wrapper>
  );
};
