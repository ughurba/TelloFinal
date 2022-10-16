import { SmallSlider } from "Components/shared";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useGetAllRelatedProductQuery } from "services/baseServices/goodsServices";
import { Wrapper, Title } from "./style";

interface Props {
  cateId: number;
}
export const RelatedProducts: FC<Props> = ({ cateId }) => {
  const { data } = useGetAllRelatedProductQuery(cateId);
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t("RelatedProducts")}</Title>

      {<SmallSlider isRelated={true} data={data ? data : []} />}
    </Wrapper>
  );
};
