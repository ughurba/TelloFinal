import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import az from "../public/Locales/az/translation.json";
import Backend from "i18next-http-backend";

i18n.use(Backend).use(initReactI18next).init({
  lng: "az",
});

export default i18n;
