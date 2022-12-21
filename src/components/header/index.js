import { Link, useLocation } from "react-router-dom";
import { MovieLogo } from "../../assets";
import Cart from "../cart";
import Button from "../button";

import "./style.scss";
import { useEffect, useState } from "react";
import CATEGORIES from "../../consts/categories";

const Header = () => {
  const location = useLocation();

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

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={MovieLogo} />
        <h2>My Movies</h2>
      </div>
      <div className="action-buttons">
        <div className="navigation">
          {categoriesKeys.map((value) => (
            <Button
              key={value}
              Component={Link}
              to={`${APP_URL}?${value.toLowerCase()}`}
              preventScrollReset
              className={selectedSection === value ? "button-active" : ""}
            >
              {value.replace("_", " ")}
            </Button>
          ))}
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default Header;
