import { createContext, useContext } from "react";

import homeContent from "../assets/home.json";
import navBarContent from "../assets/navBar.json";
import carDetailViewContent from "../assets/carDetailView.json";

interface ContentContextProps {
  homeContent: any;
  navContent: any;
  carDetailViewContent: any;
}

const ContentContext = createContext<ContentContextProps | undefined>(
  undefined
);

export const useContentContext = () => {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export const ContentProvider = ({ children }: any): JSX.Element => {
  return (
    <ContentContext.Provider
      value={{
        carDetailViewContent: carDetailViewContent,
        homeContent: homeContent,
        navContent: navBarContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
