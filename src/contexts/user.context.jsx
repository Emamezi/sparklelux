import { createContext, useState } from "react";

//actual value to access or default value
export const UserContext = createContext({
  currentUser: null, //is an empty objext --> null
  setCurrentUser: () => null,
});

//Prociser is the actual component
export const UserProvider = ({ children }) => {
  //initial vlaues for the state
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }; //value to be stored in the context and passed down/across to cibling components
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
