import { StyledMenuList, Wrapper } from "./style";
import { Flex } from "../../../../shared";
import { Links } from "Routes/links";
import { useTranslation } from "react-i18next";
import { useGetAllCategoriesQuery } from "services/baseServices/categoriesServices";

import { useAppDispatch } from "Redux/hooks";
import { setCategoryId } from "Redux/slices/goodsSlice";

export const SubMenu = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetAllCategoriesQuery();
  const { t } = useTranslation();

  const handleSetCategoryId = (id: number) => {
    dispatch(setCategoryId(id));
    localStorage.setItem("categoryId", JSON.stringify(id));
  };

  return (
    <Wrapper>
      <Flex>
        <StyledMenuList to={Links.app.main}>{t("HomePage")}</StyledMenuList>
        {data?.map((item) => (
          <StyledMenuList
            key={item.id}
            onClick={() => handleSetCategoryId(item.id)}
            to={`${Links.app.product}/${item.id}`}
          >
            {item.title}
          </StyledMenuList>
        ))}
        <StyledMenuList to={`${Links.app.product}/allBrands`}>
          Bütün brendlər
        </StyledMenuList>
        <StyledMenuList to={`${Links.app.product}/discount`}>
          Endirimlər
        </StyledMenuList>
      </Flex>
    </Wrapper>
  );
};
