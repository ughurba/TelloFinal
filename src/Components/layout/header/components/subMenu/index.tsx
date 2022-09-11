import { StyledMenuList, Wrapper } from "./style";
import { Flex } from "../../../../shared";
import { Links } from "Routes/links";
import { useTranslation } from "react-i18next";
import {
  IPagination,
  useGetAllCategoriesQuery,
  useGetCategoryProductQuery,
} from "services/categoriesServices";
import { useEffect, useMemo, useState } from "react";
import {
  setPhonesLoading,
  setPhones,
  setHeadphonesLoading,
  setHeadphones,
  setCategoryId,
} from "Redux/slices/goodsSlice";
import { useAppDispatch } from "Redux/hooks";

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
  const [id, setId] = useState<number>(0);

  const Pagination: IPagination = {
    id: id,
    page: 1,
    size: 6,
  };
  const { data: goods, isLoading } = useGetCategoryProductQuery(Pagination);
  useEffect(() => {
    if (goods) {
      dispatch(setCategoryId(id));

      dispatch(setPhones(goods));
      dispatch(setPhonesLoading(isLoading));
      dispatch(setHeadphones(goods));
      dispatch(setHeadphonesLoading(isLoading));
    }
  }, [goods]);

  return (
    <Wrapper>
      <Flex>
        <StyledMenuList to={Links.app.main}>{t("HomePage")}</StyledMenuList>
        {data?.map((item) => (
          <StyledMenuList
            key={item.id}
            onClick={() => setId(item.id)}
            to={Routes[item.id as keyof typeof Routes].link}
          >
            {Routes[item.id as keyof typeof Routes].title}
          </StyledMenuList>
        ))}
      </Flex>
    </Wrapper>
  );
};
