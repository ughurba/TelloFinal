import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { toast } from "react-toastify";


export const useSuccess = (isSuccess: boolean, text: string) => {
  const { t } = useTranslation();
  useEffect(() => {
    if (isSuccess) {
      toast.success(t(text));
    }
  }, [isSuccess]);
};
