import { Link, useLocation } from "react-router-dom";
import { useCycle } from "framer-motion";

import { MovieLogo } from "../../assets";
import Cart from "../cart";
import Button from "../button";
import { useEffect, useState } from "react";
import CATEGORIES from "../../consts/categories";
import MenuButtonIcon from "../animations/MenuButtonIcon";
import MenuList from "../animations/MenuList";
import { useDimensions } from "../../utils/hooks/useDimensions";

import "./style.scss";

const Menu = ({ isMobile, isOpen, children }) => {
  if (isMobile) {
    return (
      <MenuList open={isOpen} height={200}>
        {children}
      </MenuList>
    );
  }

  return children;
};

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useCycle(false, true);
  const [windowWidth] = useDimensions();
  const isMobile = windowWidth <= 693;
  const categoriesKeys = Object.keys(CATEGORIES);
  const APP_URL = process.env.APP_URL;

  const [selectedSection, setSelectedSection] = useState("POPULAR");
  const onScroll = (event) => {
    const winTop = event.target?.scrollTop - 1;
    let selectedSectionId = "POPULAR";
    const movieSections = document.getElementsByClassName("movie-section");
    for (let index = 0; index < movieSections.length; index++) {
      const section = movieSections[index];
      const position = section.getBoundingClientRect();
      if (position.top <= winTop) {
        selectedSectionId = section.id;
      }
    }
    setSelectedSection(selectedSectionId);
  };

  useEffect(() => {
    if (location.pathname === APP_URL) {
      document.addEventListener("scroll", onScroll, true);
    } else {
      setSelectedSection("");
    }
    return () => {
      document.removeEventListener("scroll", onScroll, true);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen();
    }
  }, [isMobile]);

  return (
    <div className="header-container">
      <div className="header-content">
        {isMobile && (
          <Button className="menu-mobile-btn" onClick={setIsMenuOpen}>
            <MenuButtonIcon isOpen={isMenuOpen} />
          </Button>
        )}
        <div className="logo-container">
          <img src={MovieLogo} />
          <h2>My Movies</h2>
        </div>
        <div className="action-buttons">
          <div className={`navigation ${isMobile ? "navigation-mobile" : ""}`}>
            <Menu isOpen={isMenuOpen} isMobile={isMobile}>
              {categoriesKeys.map((value) => (
                <Button
                  key={value}
                  Component={Link}
                  to={`${APP_URL}?${value.toLowerCase()}`}
                  preventScrollReset
                  className={selectedSection === value ? "button-active" : ""}
                  onClick={setIsMenuOpen}
                >
                  {value.replace("_", " ")}
                </Button>
              ))}
            </Menu>
          </div>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Header;
