import { FC, useMemo, useState } from "react";
import { StyledMain } from "./style";
import { ProductsHome } from "./components/productsMain";
import { BigCards } from "./components/bigCard";
import { SmallSlider, InfoCard, Swiper } from "Components/shared";
import { Goods } from "types";
import {
  useFetchAllGoodsQuery,
  useGetBestSellingProductQuery,
  useGetNewArrivalProductQuery,
} from "services/goodsServices";
import { load } from "Assets";
import { useTranslation } from "react-i18next";
import { Loader } from "../../Components/shared/loader";

export const MainPage: FC = () => {
  const { t } = useTranslation();

  const { data, isLoading: isRatingGoodsLoad } =
    useGetBestSellingProductQuery();

  const { data: newArrivalProduct } = useGetNewArrivalProductQuery();
  const { data: goods } = useFetchAllGoodsQuery();
  const [bestSellingProducts, setBestSellingProducts] = useState<Goods[]>([]);
  const [headphones, setHeadphone] = useState<Goods[]>([]);
  const [newArrivalHeadphones, setNewArrivalHeadphones] = useState<Goods[]>();
  const [phones, setPhones] = useState<Goods[]>([]);

  useMemo(() => {
    if (goods) {
      setPhones(goods?.filter((g) => g.categoryTitle === "Telefonlar"));
      setHeadphone(goods?.filter((g) => g.categoryTitle === "Aksessuarlar"));
    }
  }, [goods]);
  useMemo(() => {
    if (newArrivalProduct) {
      setNewArrivalHeadphones(
        newArrivalProduct?.filter((n) => n.categoryTitle === "Aksessuarlar")
      );
    }
  }, [newArrivalProduct]);
  useMemo(() => {
    if (data) {
      setBestSellingProducts(data);
      setHeadphone(data.filter((h) => h.categoryTitle === "Aksessuarlar"));
    }
  }, [data]);

  return isRatingGoodsLoad ? (
    <Loader />
  ) : (
    <StyledMain>
      <Swiper />

      <div>
        <ProductsHome
          title={t("BestSellingProducts")}
          ratingGoods={bestSellingProducts?.slice(0, 4)}
        />
        <ProductsHome
          title={t("NewArrivals")}
          ratingGoods={newArrivalProduct?.slice(0, 4)}
        />
        <BigCards />
        <ProductsHome
          title={t("NewArrivalAccessories")}
          ratingGoods={newArrivalHeadphones?.slice(0, 4)}
        />
      </div>

      <InfoCard phones={phones} headphones={headphones} />
      <SmallSlider />
    </StyledMain>
  );
};
