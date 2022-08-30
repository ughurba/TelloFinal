import { Footer } from "../../Components/layout/footer";
import { GroupTello } from "../../Assets";
import { Container, Flex, TotalSide } from "../../Components/shared";
import { InputSide } from "./components/inputSide";
import { useState } from "react";
import { HeaderIcon, StyledTotalSide, Wrapper } from "./style";
import { IUserPay } from "../../types";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
export interface Confirm {
  personal?: boolean;
  delivery: boolean;
  payments: boolean;
}

export const Pay = () => {
  const navigate = useNavigate();

  const [confirmation, setConfirmation] = useState<Confirm>({
    personal: false,
    delivery: false,
    payments: false,
  });
  const [data, setData] = useState<Partial<IUserPay>>();
  const [personalInfo, setPersonalInfo] = useState<Record<string, string>>();
  const [delivering, setDelivering] = useState<Record<string, string>>();
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

  const handleClickConfirm = (value: Record<string, boolean>) => {
    setConfirmation({
      ...confirmation,
      payments: !confirmation.payments,
    });
    setData({
      ...data,
      card: value.card,
      cash: value.cash,
    });

    swal({
      title: "Tesdiqlendi",
      icon: "success",
    }).then((res) => {
      if (res) {
        navigate("/");
      }
    });
  };

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
            <TotalSide />
          </StyledTotalSide>
        </Flex>
      </Container>
      <Footer />
    </Wrapper>
  );
};
