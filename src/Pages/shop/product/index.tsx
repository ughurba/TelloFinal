import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Brand, Favorits } from "types";
import { SizeProducts, Wrapper, WrapperShop, WrapperSideBar } from "./style";
import * as React from "react";
import { Flex, Container, Products } from "Components/shared";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "Redux/hooks";
import {
  IProductType,
  useGetBrandsQuery,
  useGetCategoryProductQuery,
} from "services/baseServices/categoriesServices";
import { BrandFilter } from "../components/brandFilter";
import { RedesignedPagination, Loader } from "Components/shared";
import {
  setCategoryId,
  setProduct,
  setProductLoading,
} from "Redux/slices/goodsSlice";
import { RangeSlider } from "../components/rangeSlide";
import { useDebounce } from "Hooks/debounce";
import { useSetFavoriteMutation } from "services/baseServices/shopServices";
import { NativeSelectDemo } from "../components/select";
import { useParams } from "react-router-dom";

const Product = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState<Brand[]>([]);
  const [value, setValue] = React.useState<number[]>([0, 9500]);
  const [orderByValue, setOrderByValue] = useState<number>(0);
  const id = Number(localStorage.getItem("categoryId"));
  const { product, productLoading } = useAppSelector((state) => state.goods);
  const { user } = useAppSelector((state) => state.user);

  const debounced = useDebounce(value, 1000);
  const { data: brands } = useGetBrandsQuery();

  const [brandValue, setBrandValue] = useState<number[]>([]);
  const handleChangeBrand = useCallback(
    (ev: FormEvent<HTMLInputElement>) => {
      if (ev.currentTarget.checked) {
        setBrandValue([...brandValue, +ev.currentTarget.name]);
      } else {
        setBrandValue(
          brandValue.filter((item) => item !== +ev.currentTarget.name)
        );
      }
    },
    [brandValue]
  );
  const handleValue = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderByValue(+ev.currentTarget.value);
  };
  const { category = "" } = useParams();
  const ProductType: IProductType = {
    id: category,
    brandIds: brandValue,
    orderBy: orderByValue,
    page: page,
    size: 6,
    minPrice: debounced[0],
    maxPrice: debounced[1],
    category: category,
    userId: user.nameid,
  };
  const {
    data,
    refetch: getAllProduct,
    isLoading: loading,
  } = useGetCategoryProductQuery(ProductType);
  const [postFavorite] = useSetFavoriteMutation();

  useEffect(() => {
    if (data) {
      dispatch(setCategoryId(id));
      dispatch(setProduct(data));
      dispatch(setProductLoading(loading));
    }
  }, [data]);
  useMemo(() => {
    if (brands) {
      setBrand(brands.map((item) => item));
    }
  }, [brands]);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleChangeFilteredPrice = (
    event: Event,
    newValue: number | number[]
  ) => {
    setValue(newValue as number[]);
  };

  const handleNoCheckFavorite = (id: number, fav: Favorits[]) => {
    postFavorite({
      productId: id,
      favId: fav[0]?.id,
    });
    getAllProduct();
  };

  return (
    <Wrapper>
      <Container>
        {productLoading && loading ? (
          <Loader />
        ) : (
          <Flex>
            <WrapperSideBar>
              {
                <>
                  <BrandFilter
                    handleChange={handleChangeBrand}
                    title={t("Brand")}
                    brands={brand}
                  />
                  <RangeSlider
                    value={value}
                    handleChange={handleChangeFilteredPrice}
                  />
                </>
              }
            </WrapperSideBar>
            {product?.result.length === 0 ? (
              <div>{t("NoResultsFound")}</div>
            ) : (
              <WrapperShop>
                <SizeProducts>
                  {product?.result.length} {t("ProductFound")}
                </SizeProducts>
                <Products
                  handleNoCheckFavorite={handleNoCheckFavorite}
                  data={product}
                />
                {
                  <RedesignedPagination
                    page={page}
                    onChange={handleChange}
                    productCount={product.totalCount}
                  />
                }
              </WrapperShop>
            )}
            <NativeSelectDemo handleValue={handleValue} />
          </Flex>
        )}
      </Container>
    </Wrapper>
  );
};
export default Product;
