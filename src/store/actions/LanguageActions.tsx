import { Dispatch } from "redux";
import Actions, { ActionDispatchTypes } from "../actions/actions";
import { locale } from "../../components/LanguageSelector/WordsFile";

export const SetLanguage = (lang: string) => (
  dispatch: Dispatch<ActionDispatchTypes>
) => {
  let language = null;

  if (lang === "en") {
    language = locale.en;
  } else if (lang === "lt") {
    language = locale.lt;
  } else if (lang === "ru") {
    language = locale.ru;
  }
  localStorage.setItem("lang", lang);
  dispatch({
    type: Actions.SET_LANGUAGE,
    payload: language,
  });
};

export const CheckLangState = () => {
  const lang = localStorage.getItem("lang");

  if (!lang) {
    return SetLanguage("en");
  } else {
    return SetLanguage(lang);
  }
};
