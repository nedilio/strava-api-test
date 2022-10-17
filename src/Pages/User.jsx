import { useContext, useEffect, useState } from "react";
import { StravaContext } from "../context/StravaContext";
import { useNavigate } from "react-router-dom";
import { getActivities, getStats } from "../services";
import Activities from "../components/Activities/Activities";
import Stats from "../components/Stats/Stats";

const User = () => {
  const [stats, setStats] = useState({});
  const [activities, setActivities] = useState([]);
  const { user, logoutUser, userLogged } = useContext(StravaContext);
  const [athlete, setAthlete] = useState({});
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (user.athlete) {
      setAthlete(user.athlete);
      setToken(user.access_token);
    }
  }, [user]);

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

  const handleGetActivities = (activities, token) => {
    getActivities(activities, token)
      .then((res) => {
        return res.map((activity) => {
          const {
            name,
            distance,
            total_elevation_gain,
            moving_time,
            average_speed,
            id,
          } = activity;
          return {
            name,
            distance,
            total_elevation_gain,
            moving_time,
            average_speed,
            id,
          };
        });
      })
      .then((res) => setActivities(res));
  };
  return (
    <div>
      <p>{athlete.username}</p>
      <div>
        <img src={athlete.profile} alt={athlete.username} />
      </div>
      <div>
        <button onClick={() => handleGetStats(athlete.id, token)}>
          Get Stats
        </button>

        <button onClick={() => handleGetActivities(2, token)}>
          Get Activities
        </button>
        <button onClick={handleLogOut}>Logout</button>
      </div>
      {stats.all_run_totals && (
        <Stats stats={stats} clearStats={clearStats}></Stats>
      )}
      {activities.length > 0 && (
        <Activities activities={activities}></Activities>
      )}
    </div>
  );
};

export default User;
