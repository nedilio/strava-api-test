import { createContext, useEffect, useState } from "react";

export const StravaContext = createContext();

const StravaContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [userLogged, setUserLogged] = useState(false);
  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
      setUserLogged(true);
      console.log(JSON.parse(userStorage));
    } else {
      addUser();
    }
  }, []);

  const addUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
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
