import { useContext } from "react";
import { StravaContext } from "../context/StravaContext";

const Home = () => {
  const { userLogged, logoutUser } = useContext(StravaContext);
  const { VITE_CLIENT_ID } = import.meta.env;
  const baseUrl = window.location.href;
  const redirectUrl = `${baseUrl}redirect`;
  const scope = "activity:read_all";
  const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${VITE_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
  };
  return (
    <div>
      {userLogged ? (
        <button onClick={logoutUser}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Strava Login</button>
      )}
    </div>
  );
};

export default Home;
