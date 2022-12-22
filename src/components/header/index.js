import { Link, useLocation } from "react-router-dom";
import { useCycle } from "framer-motion";

import { MovieLogo } from "../../assets";
import Cart from "../cart";
import Button from "../button";
import { useEffect, useState } from "react";
import CATEGORIES from "../../consts/categories";
import MenuButtonIcon from "../animations/MenuButtonIcon";
import SlideBottomList from "../animations/SlideBottomList";
import { useDimensions } from "../../utils/hooks/useDimensions";

import "./style.scss";
import { getApplicationRoute } from "../../utils/route";

const Menu = ({ isMobile, isOpen, children }) => {
  if (isMobile) {
    return (
      <SlideBottomList open={isOpen} height={200}>
        {children}
      </SlideBottomList>
    );
  }

  return children;
};

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useCycle(false, true);
  const [windowWidth] = useDimensions();
  const isMobile = windowWidth <= 693;
  const CATEGORIES_KEYS = Object.keys(CATEGORIES);

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
    if (location.pathname === getApplicationRoute()) {
      document.addEventListener("scroll", onScroll, true);
    } else {
      setSelectedSection("");
    }
    return () => {
      document.removeEventListener("scroll", onScroll, true);
    };
  }, [location.pathname]);

  return (
    <div className="header-container">
      <div className="header-content">
        {isMobile && (
          <Button className="menu-mobile-btn" onClick={setIsMenuOpen}>
            <MenuButtonIcon isOpen={isMenuOpen} />
          </Button>
        )}
        <div className="logo-container">
          <Button Component={Link} to={getApplicationRoute()}>
            <img src={MovieLogo} />
            <h2>My Movies</h2>
          </Button>
        </div>
        <div className="action-buttons">
          <div className={`navigation ${isMobile ? "navigation-mobile" : ""}`}>
            <Menu isOpen={isMenuOpen} isMobile={isMobile}>
              {CATEGORIES_KEYS.map((value) => (
                <Button
                  key={value}
                  Component={Link}
                  to={getApplicationRoute(`?${value.toLowerCase()}`)}
                  preventScrollReset
                  className={selectedSection === value ? "button-active" : ""}
                  onClick={setIsMenuOpen}
                >
                  {value.replace("-", " ")}
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
