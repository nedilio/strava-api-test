import { createContext, useEffect, useState } from "react";

export const StravaContext = createContext();

const StravaContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [userLogged, setUserLogged] = useState(false);
  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    console.log(typeof userStorage);
    console.log("userStorage: ", JSON.parse(userStorage));

    if (userStorage != null) {
      console.log("tengo usuario en local storage y lo traigo");
      setUser(JSON.parse(userStorage));
      setUserLogged(true);
    } else {
      console.log("no tengo usuario en local storage");
    }
  }, []);

  const addUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const logoutUser = () => {
    setUserLogged(false);
    localStorage.removeItem("user");
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
