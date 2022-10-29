import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Specification, Container, Flex, Loader } from "Components/shared/";
import { FullInfoProductContent, FullInfoShowSlider } from "./components";
import { Wrapper } from "./style";
import { useGetOneQuery } from "services/baseServices/goodsServices";
import { RelatedProducts } from "./components/relatedProducts";
import { useAppDispatch } from "Redux/hooks";
import { setSearch } from "Redux/slices/searchSlice";

const DetailProduct = () => {
  const { id = "" } = useParams<{ id: string }>();
  const [childImg, setChildImg] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetOneQuery(id);
  useEffect(() => {
    dispatch(setSearch(""));
  }, [data]);

  useEffect(() => {
    let newArr: string[] = [];
    data?.photos.forEach((item) => {
      if (!item.isMain) {
        newArr.push(item.path);
      }
    });
    setChildImg(newArr);
  }, [data]);

  return (
    <Container>
      <Wrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <Flex>
              <FullInfoShowSlider childImg={childImg} />
              {data && <FullInfoProductContent product={data} />}
            </Flex>
            <RelatedProducts cateId={data?.categoryId ? data?.categoryId : 0} />
            <Specification product={data} />
          </div>
        )}
      </Wrapper>
    </Container>
  );
};
export default DetailProduct;
