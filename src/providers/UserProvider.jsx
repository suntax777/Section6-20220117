import React, { createContext } from "react";

export const UserContext = createContext({});

export const userProvider = (props) => {
  const { childeren } = props;
  const contextName = "hiro";
  return (
    <UserContext.Provider value={{ contextName }}>
      {childeren}
    </UserContext.Provider>
  );
};
