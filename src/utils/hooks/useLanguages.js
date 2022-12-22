import LANGUAGES from "../../consts/languages";
export const useLanguages = () => {
  const languages = LANGUAGES;

  const findLanguage = (language) => {
    return languages.find((value) => value.key === language) || languages[0];
  };

  return { languages, findLanguage };
};
