import "./Stats.css";

const Stats = ({ stats, clearStats }) => {
  return (
    <div className="stats-container">
      <div className="stats">
        <button onClick={clearStats}>close</button>
        <p>
          Ride mÃ¡s largo ever ð´ð»ââï¸â¤-----------------ð´ð»ââï¸:{" "}
          {(stats.biggest_ride_distance / 1000).toFixed(2)} Km
        </p>
        <p>
          Distancia en el aÃ±o ð´ð»ââï¸:{" "}
          {(stats.ytd_ride_totals.distance / 1000).toFixed(0)} Km
        </p>
        <p>
          Desnivel Positivo en el aÃ±o ðµð¼ââï¸:{" "}
          {stats.ytd_ride_totals.elevation_gain.toFixed(0)} m
        </p>
      </div>
    </div>
  );
};

export default Stats;
