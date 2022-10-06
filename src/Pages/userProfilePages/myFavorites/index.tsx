import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { CustomCard, Flex } from "Components/shared";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useGetAllFavoriteQuery } from "services/baseServices/shopServices";
import styled from "styled-components";
import { Title } from "../personalInformation/style";

export const WrapperCard = styled.div`
  margin-left: 25px;
  margin-top: 20px;
`;
export const Wrapper = styled.div``;

export const MyFavorites = () => {
  const { t } = useTranslation();
  const { data, refetch: getAllFavorite } = useGetAllFavoriteQuery();

  useEffect(() => {
    getAllFavorite();
  }, []);
  return (
    <Wrapper>
      <Title>{t("MyFavorites")}</Title>
      <Flex FlexWrap="wrap">
        {data?.map((item) => (
          <WrapperCard>
            <CustomCard key={item.id} isFavorite={false} {...item} />
          </WrapperCard>
        ))}
      </Flex>
    </Wrapper>
  );
};
