import { FC, useEffect, useMemo, useState } from "react";
import { StyledMain } from "./style";
import { ProductsHome } from "./components/productsMain";
import { BigCards } from "./components/bigCard";
import { SmallSlider, InfoCard, BigSlider, Loader } from "Components/shared";
import sliderImg from "Redux/fakeData/sliderImg.json";
import { Goods } from "types";
import {
  useFetchAllGoodsQuery,
  useGetBestSellingProductQuery,
  useGetNewArrivalProductQuery,
} from "services/baseServices/goodsServices";
import { useTranslation } from "react-i18next";
import { useAppDispatch} from "Redux/hooks";
import { extendedApi } from "services/baseServices/basketServices";
import { CustomerAssistance } from "./components/customerAssistance";

const MainPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(extendedApi.util.resetApiState());
  }, [dispatch]);

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

  const handleNoCheckFavorite = (id: number) => {
    // postFavorite({
    //   productId: id,
    //   isFavorite :
    // });
  };
  return isRatingGoodsLoad ? (
    <Loader />
  ) : (
    <StyledMain>
      <BigSlider />
      <div>
        <ProductsHome
          handleNoCheckFavorite={handleNoCheckFavorite}
          title={t("BestSellingProducts")}
          ratingGoods={bestSellingProducts?.slice(0, 4)}
        />
        <ProductsHome
          handleNoCheckFavorite={handleNoCheckFavorite}
          title={t("NewArrivals")}
          ratingGoods={newArrivalProduct?.slice(0, 4)}
        />
        <BigCards />
        <ProductsHome
          handleNoCheckFavorite={handleNoCheckFavorite}
          title={t("NewArrivalAccessories")}
          ratingGoods={newArrivalHeadphones?.slice(0, 4)}
        />
      </div>

      <InfoCard phones={phones} headphones={headphones} />
      <CustomerAssistance />
      <SmallSlider data={sliderImg} />
    </StyledMain>
  );
};
export default MainPage;
