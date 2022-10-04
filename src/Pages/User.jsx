import { useContext, useState } from "react";
import { StravaContext } from "../context/StravaContext";
import { useNavigate } from "react-router-dom";
import { getStats } from "../services";
import Stats from "../components/Stats";

const User = () => {
  const [stats, setStats] = useState({});
  const { user, logoutUser } = useContext(StravaContext);
  const { athlete, access_token } = user;

  const navigate = useNavigate();

  const handleLogOut = () => {
    logoutUser();
    navigate("/");
  };
  const handleGetStats = (id, token) => {
    getStats(id, token).then((res) => setStats(res.data));
  };
  const clearStats = () => {
    setStats({});
  };

  return (
    <div>
      <p>{athlete.username}</p>
      <div>
        <img src={athlete.profile} alt={athlete.username} />
      </div>
      <div>
        <button onClick={() => handleGetStats(athlete.id, access_token)}>
          Get Stats
        </button>
        <button onClick={handleLogOut}>Logout</button>
      </div>
      {stats.all_run_totals && (
        <Stats stats={stats} clearStats={clearStats}></Stats>
      )}
    </div>
  );
};

export default User;
