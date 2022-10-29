import { Footer } from "../../Components/layout/footer";
import { GroupTello } from "Assets";
import { Container, Flex, TotalSide } from "../../Components/shared";
import { InputSide } from "./components/inputSide";
import { useCallback, useEffect, useState } from "react";
import { HeaderIcon, StyledTotalSide, Wrapper } from "./style";
import { IUserPay } from "types";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { extendedApi } from "services/baseServices/basketServices";
import { useBasketUpdate } from "Hooks/basket";
import { useSetUser } from "Hooks/useSetUser";
import { usePostOrderMutation } from "services/baseServices/saleServices";
import { useTranslation } from "react-i18next";
export interface Confirm {
  personal?: boolean;
  delivery: boolean;
  payments: boolean;
}

const Pay = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(extendedApi.util.resetApiState());
  }, [dispatch]);
  useSetUser();
  useBasketUpdate();
  const [confirmation, setConfirmation] = useState<Confirm>({
    personal: false,
    delivery: false,
    payments: false,
  });
  const { total } = useAppSelector((state) => state.basket.basket);
  const [data, setData] = useState<Partial<IUserPay>>();
  const [personalInfo, setPersonalInfo] = useState<Record<string, string>>();
  const [delivering, setDelivering] = useState<Record<string, string>>();
  const [postOrder, { isSuccess: orderSuccess }] = usePostOrderMutation();

  const handleClickPersonalValue = (value: Record<string, string>) => {
    setPersonalInfo({ ...personalInfo, ...value });
    setConfirmation({
      ...confirmation,
      personal: !confirmation.personal,
    });
    setData({
      ...data,
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      mobile: value.mobile,
    });
  };

  const handleClickDeliveryValue = (value: Record<string, string>) => {
    setDelivering({ ...delivering, ...value });
    setConfirmation({
      ...confirmation,
      delivery: !confirmation.delivery,
    });
    setData({
      ...data,
      address: value.address,
      building: value.building,
      courier: value.courier,
    });
  };

  const handleClickConfirm = useCallback(
    (value: Record<string, boolean>) => {
      setConfirmation({
        ...confirmation,
        payments: !confirmation.payments,
      });
      setData({
        ...data,
        card: value.card,
        cash: value.cash,
      });
    },
    [data, confirmation]
  );

  useEffect(() => {
    if (data?.cash) {
      postOrder(data);
    }
  }, [handleClickConfirm]);

  if (orderSuccess) {
    swal({
      title: t("YourOrderHasBeenSuccessfullyRegistered"),
      icon: "success",
    }).then((res) => {
      if (res) {
        navigate("/");
      }
    });
  }
  return (
    <Wrapper>
      <HeaderIcon>
        <Flex JsContent={"center"}>
          <img src={GroupTello} />
        </Flex>
      </HeaderIcon>
      <Container>
        <Flex JsContent={"space-around"}>
          <InputSide
            confirmation={confirmation}
            personalInfo={personalInfo}
            delivering={delivering}
            handleClickConfirm={handleClickConfirm}
            handleClickDeliveryValue={handleClickDeliveryValue}
            handleClickPersonalValue={handleClickPersonalValue}
          />
          <StyledTotalSide>
            <TotalSide total={total} />
          </StyledTotalSide>
        </Flex>
      </Container>
      <Footer />
    </Wrapper>
  );
};
export default Pay;
