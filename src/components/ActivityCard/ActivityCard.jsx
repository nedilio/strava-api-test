import React from "react";
import { useElapsed, useKilometers, useSpeed } from "../../hooks/index";
import { Link } from "react-router-dom";
import "./ActivityCard.css";

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      <h4>
        <Link className="link" to={`/activity/${activity.id}`}>
          {activity.name}
        </Link>
      </h4>
      <p>Distancia🚴🏻‍♂️: {useKilometers(activity.distance, 1)} Km</p>
      <p>Desnivel Positivo📈: {activity.total_elevation_gain} m</p>
      <p>Tiempo⌚️: {useElapsed(activity.moving_time)}</p>
      <p>Velocidad Promedio💨: {useSpeed(activity.average_speed)} Km/h</p>
    </div>
  );
};

export default ActivityCard;
