import React, { FC } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface Props {
  form: HTMLFormElement;
  field: Record<string, string>;
  label: string;
  country: string;
  onChange: any;
}
export const PhoneInputField: FC<Props> = ({
  field: { name, value },
  form: { setFieldValue },
  country,
  onChange,
}) => {
  const onValueChange = (phoneNumber: string) => {
    setFieldValue(name, phoneNumber);

    if (onChange !== null) {
      onChange(phoneNumber);
    }
  };

  return (
    <PhoneInput
      value={value}
      onChange={onValueChange}
      country={country}
      enableAreaCodes={true}
    />
  );
};

PhoneInputField.defaultProps = {
  onChange: null,
};
