import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Specification, Container, Flex, Loader } from "Components/shared/";
import { FullInfoProductContent, FullInfoShowSlider } from "./components";
import { Wrapper } from "./style";
import { useGetOneQuery } from "../../services/goodsServices";

export const DetailProduct = () => {
  const { id } = useParams();
  const [mainImg, setMainImg] = useState<string[]>([]);
  const [childImg, setChildImg] = useState<string[]>([]);

  const { data, isLoading } = useGetOneQuery(id ? id : "");
  useEffect(() => {
    data?.photos.forEach((item) => {
      if (item.isMain) {
        setMainImg([item.path]);
      } else {
        setChildImg([item.path]);
      }
    });
  }, [data]);

  return (
    <Container>
      <Wrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <Flex>
              <FullInfoShowSlider mainImg={mainImg} childImg={childImg} />{" "}
              <FullInfoProductContent product={data} />
            </Flex>
            <Specification product={data} />
          </div>
        )}
      </Wrapper>
    </Container>
  );
};
