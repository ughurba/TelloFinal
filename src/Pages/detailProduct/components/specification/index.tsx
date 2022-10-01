import { Flex, MyForm } from "Components/shared";
import { FC, useEffect, useState } from "react";
import { DateTime } from "luxon";
import {
  Paragraph,
  Wrapper,
  Title,
  Line,
  List,
  Link,
  InfoProduct,
  StyledDateTime,
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
import { buttonLoader } from "Assets";
import { StyledButton } from "Pages/auth/components/loginForm/style";
interface Props {
  product?: DetailProduct;
}

export const Specification: FC<Props> = ({ product }) => {
  const [specification, setSpecification] = useState<boolean>(true);
  const { user } = useAppSelector((state) => state.user);
  const [postComment, result] = useCommentPostMutation();
  const { data } = useGetCommentsQuery(product?.id ? product?.id : 0);
  const [removeComment] = useRemoveCommentMutation();
  const { data: commentData, isSuccess, isLoading } = result;
  const [commentInfo, setCommentInfo] = useState<IComment[]>(
    commentData ? commentData : []
  );
  useEffect(() => {
    if (isSuccess) {
      setCommentInfo(commentData);
    }
  }, [isSuccess]);

  const { t } = useTranslation();
  useSetUser();
  const handleClick = (value: Record<string, string>) => {
    if (product) {
      postComment({
        createTime: DateTime.now().toISO(),
        productId: product.id,
        appUserId: user.nameid,
        name: user.Name,
        surname: user.Surname,
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
      setCommentInfo(data);
    }
  }, [data]);

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
                  {/*<StorageColor>Yaddaş - 64, Rəng - Qara</StorageColor>*/}
                  <StyledDateTime>
                    {item.createTime &&
                      DateTime.fromISO(item?.createTime).toFormat(
                        "yyyy LLL dd"
                      )}
                  </StyledDateTime>
                </div>
              </Flex>
              <Description>{item.content}</Description>
              {user.nameid === item.appUserId && (
                <Close
                  onClick={() => handleRemoveComment(item.id ? item.id : 0)}
                />
              )}
            </WrapperComment>
          ))}
          <MyForm onClick={handleClick}>
            {user.isOnline && (
              <>
                <StyledTextArea />
                <StyledButton
                  startIcon={
                    isLoading ? <img width={40} src={buttonLoader} /> : ""
                  }
                  type={"submit"}
                >
                  {t("Insert")}
                </StyledButton>
              </>
            )}
          </MyForm>
        </WrapperReviews>
      )}
    </Wrapper>
  );
};
