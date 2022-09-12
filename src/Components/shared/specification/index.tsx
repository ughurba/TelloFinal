import { Flex, MyField, MyForm } from "../";
import { FC, useState } from "react";
import {
  Paragraph,
  Wrapper,
  Title,
  Line,
  List,
  Link,
  InfoProduct,
  Date,
  StorageColor,
  FullName,
  WrapperReviews,
  WrapperComment,
  Description,
  StyledTextArea,
} from "./style";
import { useTranslation } from "react-i18next";
import { DetailProduct } from "types";
import { useAppSelector } from "Redux/hooks";
import { IComment } from "./types";

interface Props {
  product?: DetailProduct;
}

export const Specification: FC<Props> = ({ product }) => {
  const [specification, setSpecification] = useState<boolean>(true);
  const [commentInfo, setCommentInfo] = useState<IComment[]>([]);
  const { user } = useAppSelector((state) => state.user);

  const { t } = useTranslation();
  const handleClick = (value: Record<string, string>) => {
    if (product) {
      setCommentInfo([
        ...commentInfo,
        {
          productId: product.id,
          userId: user.nameid,
          name: user.Name,
          surname: user.Surname,
          content: value.comment,
        },
      ]);
    }
  };
  // const specifications = [
  //   t("Brand"),
  //   t("ProductType"),
  //   t("Network"),
  //   t("eSIM"),
  //   t("SIMCartCount"),
  //   t("ScreenSize"),
  //   t("ScreenPermission"),
  //   t("OperatingMemory"),
  //   t("ProsessorType"),
  // ];
  return (
    <Wrapper>
      <Flex>
        <Title
          specification={specification}
          onClick={() => setSpecification(true)}
        >
          {t("TechnicalCharacteristics")}
        </Title>
        <Title
          onClick={() => setSpecification(!specification)}
          specification={specification}
        >
          {t("Reviews")}
        </Title>
      </Flex>
      <Line />
      {specification ? (
        <Flex JsContent={"space-between"}>
          <List>
            {product?.productDetails.map((item) => (
              <Link key={item.id}>{item.name}</Link>
            ))}
          </List>
          <List>
            {product?.productDetails.map((item) => (
              <Link key={item.id}> {item.value}</Link>
            ))}
          </List>
          <InfoProduct>
            <Paragraph>{product?.description}</Paragraph>
          </InfoProduct>
        </Flex>
      ) : (
        <WrapperReviews>
          {commentInfo.map((comment) => (
            <WrapperComment>
              <Flex JsContent="space-between" AlItems="center">
                <div>
                  <FullName>{`${comment.name} ${comment.surname}`}</FullName>
                  <StorageColor>Yaddaş - 64, Rəng - Qara</StorageColor>
                </div>
                <Date>5 gün əvvəl</Date>
              </Flex>
              <Description>{comment.content}</Description>
            </WrapperComment>
          ))}
          <MyForm onClick={handleClick}>
            {user.isOnline && <StyledTextArea />}
            <button type={"submit"}>Submit</button>
          </MyForm>
        </WrapperReviews>
      )}
    </Wrapper>
  );
};
