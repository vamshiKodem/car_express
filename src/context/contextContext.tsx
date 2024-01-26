import { createContext, useContext } from "react";

import homeContent from "../assets/home.json";
import navBarContent from "../assets/navBar.json";

interface ContentContextProps {
  homeContent: any;
  navContent: any;
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
      value={{ homeContent: homeContent, navContent: navBarContent }}
    >
      {children}
    </ContentContext.Provider>
  );
};
