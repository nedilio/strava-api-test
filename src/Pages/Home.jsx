import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StravaContext } from "../context/StravaContext";

const Home = () => {
  const { user, userLogged, logoutUser } = useContext(StravaContext);
  const { VITE_CLIENT_ID } = import.meta.env;
  const baseUrl = window.location.href;
  const redirectUrl = `${baseUrl}redirect`;
  const scope =
    "read_all,profile:read_all,profile:write,activity:read,activity:read_all,activity:write";
  const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${VITE_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (user != {}) return navigate("/user");
  }, [user]);

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
