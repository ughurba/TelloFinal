import { FC, useMemo, useState } from "react";
import { StyledMain } from "./style";
import { ProductsHome } from "./components/productsMain";
import { BigCards } from "./components/bigCard";
import { SmallSlider, InfoCard, Swiper } from "Components/shared";
import { IGoods } from "types";
import { useFetchAllGoodsQuery } from "services/goodsServices";
import { load } from "Assets";
import { useTranslation } from "react-i18next";

export const MainPage: FC = () => {
  const { t } = useTranslation();
  const title = [
    t("BestSellingProducts"),
    t("NewArrivals"),
    t("NewArrivalAccessories"),
  ];
  const [phones, setPhones] = useState<IGoods[]>([]);
  const [headphones, setHeadphones] = useState<IGoods[]>([]);
  const [phonesRating, setPhonesRating] = useState<IGoods[]>([]);
  const { data, isLoading } = useFetchAllGoodsQuery();
  useMemo(() => {
    if (data) {
      setPhones(data?.filter((p) => p.name === "phone"));
      setHeadphones(data?.filter((p) => p.name === "qulaqliq"));
    }
  }, [data]);
  useMemo(() => {
    setPhonesRating(phones?.filter((p) => p.rating > 1));
  }, [phones]);

  return isLoading ? (
    <img src={load} />
  ) : (
    <StyledMain>
      <Swiper />
      {title.map((value, index) => (
        <div key={index}>
          <ProductsHome
            title={value}
            phonesRating={phonesRating.slice(0, 4)}
            headphones={headphones}
          />
          {index === 0 && <BigCards />}
        </div>
      ))}
      <InfoCard phones={phones} headphones={headphones} />
      <SmallSlider />
    </StyledMain>
  );
};
