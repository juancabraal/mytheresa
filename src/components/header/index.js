import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { MovieLogo } from "../../assets";
import Heart from "../heart";
import Button from "../button";
import { getApplicationRoute } from "../../utils/route";
import Dropdown from "../animations/Dropdown";

import { useDimensions } from "../../utils/hooks/useDimensions";
import { useLanguages } from "../../utils/hooks/useLanguages";

import "./style.scss";

const Header = () => {
  const { i18n } = useTranslation();
  const [windowWidth] = useDimensions();
  const { languages, findLanguage } = useLanguages();

  const isNotSmallDevice = windowWidth > 455;

  const selectedLanguage = findLanguage(i18n.resolvedLanguage);

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <Button Component={Link} to={getApplicationRoute()}>
            <img src={MovieLogo} />
            <h2>My Movies</h2>
          </Button>
        </div>
        <div className="option-buttons">
          <Heart />
          <div className="dropdown-menu-container">
            <Dropdown
              selected={
                isNotSmallDevice ? selectedLanguage.label : selectedLanguage.key
              }
              width={150}
            >
              {languages.map((language) => (
                <Button
                  key={language.key}
                  className="language-option"
                  onClick={() =>
                    i18n.changeLanguage(language.key.toLowerCase())
                  }
                >
                  {isNotSmallDevice ? language.label : language.key}
                </Button>
              ))}
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
