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
import { setGoods, setLoading } from "Redux/slices/goodsSlice";
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
  const [id, setId] = useState<number>(1);

  const Pagination: IPagination = {
    id: id,
    page: 1,
    size: 5,
  };
  const { data: goods, isLoading } = useGetCategoryProductQuery(Pagination);
  useEffect(() => {
    if (goods) {
      dispatch(setGoods(goods));
      dispatch(setLoading(isLoading));
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
