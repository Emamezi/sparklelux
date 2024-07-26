import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentfromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

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

  //run when the component first mounts
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentfromAuth(user);
      }

      setCurrentUser(user);
    });
    return unsubscribe; //runs hwatever we return from the cb fn whenit unmounts
  }, []); //array of conditinon (dependency array) to trigegr rerender or rerun, empty arry--- > none

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
