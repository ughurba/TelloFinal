import { StyledMenuList, Wrapper } from "./style";
import { Flex } from "../../../../shared";
import { Links } from "Routes/links";
import { useTranslation } from "react-i18next";
import { useGetAllCategoriesQuery } from "services/categoriesServices";
import { useMemo } from "react";

import { useAppDispatch } from "Redux/hooks";
import { setCategoryId } from "Redux/slices/goodsSlice";

export const SubMenu = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetAllCategoriesQuery();
  const { t } = useTranslation();
  const Routes = useMemo(
    () => ({
      1: {
        link: Links.app.phone,
        title: t("Phones"),
      },
      2: {
        link: Links.app.headphone,
        title: t("Headphones"),
      },
      3: {
        link: Links.app.allBrands,
        title: t("AllBrands"),
      },
      4: {
        link: Links.app.discounts,
        title: t("Discounts"),
      },
    }),
    [data]
  );

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
            to={Routes[item.id as keyof typeof Routes].link}
          >
            {Routes[item.id as keyof typeof Routes].title}
          </StyledMenuList>
        ))}
      </Flex>
    </Wrapper>
  );
};
