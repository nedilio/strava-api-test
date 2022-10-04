import { useContext, useState } from "react";
import { StravaContext } from "../context/StravaContext";
import { useNavigate } from "react-router-dom";
import { getActivities, getStats } from "../services";
import Stats from "../components/Stats";
import Activities from "../components/Activities";

const User = () => {
  const [stats, setStats] = useState({});
  const [activities, setActivities] = useState([]);
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
        <button onClick={() => handleGetStats(athlete.id, access_token)}>
          Get Stats
        </button>

        <button onClick={() => handleGetActivities(2, access_token)}>
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
