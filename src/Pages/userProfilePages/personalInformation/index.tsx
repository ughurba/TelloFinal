import { useAppSelector } from "Redux/hooks";
import { useTranslation } from "react-i18next";
import { Flex, MyField, MyForm } from "Components/shared";
import { Wrapper, WrapperForm, Title, StyledDate, StyledPencil } from "./style";
import { useEffect, useMemo, useState } from "react";
import { useFetchUpdateMutation } from "services/authServices";
import { StyledButton } from "../../auth/components/loginForm/style";
import { buttonLoader } from "Assets";
import { useSetUser } from "Hooks/useSetUser";
import { toast } from "react-toastify";

export const PersonalInformation = () => {
  const { t } = useTranslation();
  const { user } = useAppSelector((state) => state.user);
  const [update, result] = useFetchUpdateMutation();
  const [updateState, setUpdateState] = useState<Record<string, string>>();
  const [stateUser, setStateUser] = useState<Record<string, string>>({
    firstName: "",
    lastName: "",
    email: "",
    Birthda: "",
  });
  useMemo(() => {
    setStateUser({
      ...stateUser,
      firstName: user?.Name,
      lastName: user?.Surname,
      Birthda: user.Birthda || "",
    });
  }, [user]);

  const handleSubmit = (value: Record<string, string>) => {
    setUpdateState({
      ...updateState,
      firstName: value.firstName,
      lastName: value.lastName,
      Birthda: value.Birthda,
      userName: user.unique_name,
    });
  };

  useEffect(() => {
    if (updateState) {
      update(updateState);
    }
  }, [updateState]);

  const { data, isLoading, isSuccess } = result;

  if (isSuccess) {
    localStorage.setItem("userToken", data?.token);
  }
  useSetUser();
  return (
    <Wrapper>
      <Title>{t("PersonalInformation")}</Title>
      <WrapperForm>
        <MyForm rest={stateUser} onClick={handleSubmit}>
          <Flex JsContent={"space-between"}>
            <MyField name={"firstName"} label={t("Name")} />
            <MyField name={"lastName"} label={t("Surname")} />
          </Flex>
          <Flex JsContent={"space-between"}>
            <StyledDate name={"Birthda"} type={"date"} label={t("Birtdhy")} />
          </Flex>
          <StyledButton
            startIcon={isLoading ? <img width={40} src={buttonLoader} /> : ""}
            type={"submit"}
          >
            <StyledPencil size={20} color="#ffffff" weight="light" />
            {t("UpdateInformation")}
          </StyledButton>
        </MyForm>
      </WrapperForm>
    </Wrapper>
  );
};
