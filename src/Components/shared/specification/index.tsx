import { Flex, MyForm } from "../";
import { FC, ReactNode, useEffect, useState } from "react";
import {
  Paragraph,
  Wrapper,
  Title,
  Line,
  List,
  Link,
  InfoProduct,
  DateTime,
  StorageColor,
  FullName,
  WrapperReviews,
  WrapperComment,
  Description,
  StyledTextArea,
  Close,
} from "./style";
import { useTranslation } from "react-i18next";
import { DetailProduct } from "types";
import { useAppSelector } from "Redux/hooks";
import { IComment } from "./types";
import {
  useCommentPostMutation,
  useGetCommentsQuery,
  useRemoveCommentMutation,
} from "services/commentService";
import { useSetUser } from "Hooks/useSetUser";
interface Props {
  product?: DetailProduct;
}

export const Specification: FC<Props> = ({ product }) => {
  const [specification, setSpecification] = useState<boolean>(true);
  const { user } = useAppSelector((state) => state.user);
  const [postComment] = useCommentPostMutation();
  const { data } = useGetCommentsQuery(product?.id ? product?.id : 0);
  const [removeComment] = useRemoveCommentMutation();
  const [commentInfo, setCommentInfo] = useState<IComment[]>([]);
  const { t } = useTranslation();
  useSetUser();
  const handleClick = (value: Record<string, string>) => {
    if (product) {
      const date = new Date();
      postComment({
        createTime: date,
        productId: product.id,
        appUserId: user.nameid,
        name: user.Name,
        surname: user.Surname,
        content: value.comment,
      });
      commentInfo.push({
        productId: product.id,
        appUserId: user.nameid,
        appUser: { name: user.Name, surname: user.Surname },
        content: value.comment,
      });
    }
  };

  const handleRemoveComment = (id: number) => {
    removeComment(id);
    setCommentInfo(commentInfo.filter((comment) => comment.id !== id));
  };
  useEffect(() => {
    if (data) {
      setCommentInfo([...commentInfo, ...data]);
      console.log("data");
    }
  }, [data]);
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
          {commentInfo?.map((item, index) => (
            <WrapperComment key={index}>
              <Flex JsContent="space-between" AlItems="center">
                <div>
                  <FullName>{`${item.appUser?.name} ${item.appUser?.surname}`}</FullName>
                  <StorageColor>Yaddaş - 64, Rəng - Qara</StorageColor>
                </div>
                <DateTime>{item?.createTime as ReactNode} gün əvvəl</DateTime>
              </Flex>
              <Description>{item.content}</Description>
              <Close
                onClick={() => handleRemoveComment(item.id ? item.id : 0)}
              />
            </WrapperComment>
          ))}
          <MyForm onClick={handleClick}>
            {user.isOnline && (
              <>
                <StyledTextArea />
                <button type={"submit"}>Submit</button>
              </>
            )}
          </MyForm>
        </WrapperReviews>
      )}
    </Wrapper>
  );
};
