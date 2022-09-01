import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IGoods } from "types";
import { load } from "Assets";
import { Specification, Container, Flex } from "Components/shared/";
import { FullInfoShowSlider, FullInfoProductContent } from "./components";
import { Wrapper, StyledLoading } from "./style";
import { useGetOnePhoneQuery } from "services/goodsServices";

export const DetailProduct = () => {
  const { id } = useParams();
  const [mainImg, setMainImg] = useState<string[]>([]);
  const [childImg, setChildImg] = useState<string[]>([]);
  const [product, setProduct] = useState<IGoods>();

  const { data, isLoading } = useGetOnePhoneQuery(id ? id : "");

  useEffect(() => {
    if (data) {
      setChildImg(data.ChildImgUrl);
      setMainImg(data.MainImgUrl);
      setProduct(data);
    }
  }, [data]);

  return (
    <Container>
      <Wrapper>
        {isLoading ? (
          <StyledLoading>
            <img src={load} />
          </StyledLoading>
        ) : (
          <div>
            <Flex>
              <FullInfoShowSlider mainImg={mainImg} childImg={childImg} />
              <FullInfoProductContent product={product} />
            </Flex>
            <Specification product={product} />
          </div>
        )}
      </Wrapper>
    </Container>
  );
};
