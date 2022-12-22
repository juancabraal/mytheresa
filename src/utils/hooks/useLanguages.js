import LANGUAGES from "../../consts/languages";
export const useLanguages = () => {
  const languages = LANGUAGES;

  const findLanguage = (language) => {
    return (
      languages.find((value) => String(value.key).toLowerCase() === language) ||
      languages[0]
    );
  };

  return { languages, findLanguage };
};
