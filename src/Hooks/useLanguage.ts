import { SelectChangeEvent } from "@mui/material";
import i18n from "i18n";
import { useEffect, useState } from "react";

export const useLanguage = () => {
    
  const local = localStorage.getItem("lang");
  const [lang, setLang] = useState<string>(local ? local : "");
  localStorage.setItem("lang", lang);

  const handleChangeLang = (event: SelectChangeEvent<unknown>) => {
    setLang(event.target.value as string);
  };
  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, [lang]);
  return { handleChangeLang, lang };
};
