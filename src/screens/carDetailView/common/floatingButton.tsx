import React from "react";

import "./floatingButton.css";

export const FloatingButton: React.FC<{
  name: string;
  onClick: () => void;
}> = ({ name, onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      {name}
    </button>
  );
};
