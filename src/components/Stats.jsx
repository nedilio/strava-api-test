import "./Stats.css";

const Stats = ({ stats, clearStats }) => {
  console.log(stats);
  return (
    <div className="stats-container">
      <div className="stats">
        <button onClick={clearStats}>close</button>
        <p>
          Ride más largo ever: {(stats.biggest_ride_distance / 1000).toFixed(2)}{" "}
          Km
        </p>
        <p>
          Distancia en el año:{" "}
          {(stats.ytd_ride_totals.distance / 1000).toFixed(0)} Km
        </p>
        <p>
          Desnivel Positivo en el año:{" "}
          {stats.ytd_ride_totals.elevation_gain.toFixed(0)} m
        </p>
      </div>
    </div>
  );
};

export default Stats;
