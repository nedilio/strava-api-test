import { createContext, useState } from "react";

export const StravaContext = createContext();

const StravaContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [userLogged, setUserLogged] = useState(false);
  const addUser = (user) => {
    setUser(user);
  };
  const logoutUser = () => {
    setUserLogged(false);
  };
  const logginUser = () => {
    setUserLogged(true);
  };
  return (
    <StravaContext.Provider
      value={{ user, addUser, logginUser, logoutUser, userLogged }}
    >
      {props.children}
    </StravaContext.Provider>
  );
};

export default StravaContextProvider;
