import React from "react";
import { useNavigate } from "react-router-dom";

import "./navBar.css";
import { useContentContext } from "../../context/contextContext";

export const useNavBar = () => {
  const { navContent } = useContentContext();

  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate("/");
  };

  const onInvalidNavClick = () => {
    navigate("/invalid");
  };

  return { navContent, onLogoClick, onInvalidNavClick };
};
