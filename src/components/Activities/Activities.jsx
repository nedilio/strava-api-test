import React from "react";
import { useElapsed, useKilometers, useSpeed } from "../../hooks/index";
import { Link } from "react-router-dom";

const Activities = ({ activities }) => {
  return (
    <div>
      <h3>Activities</h3>
      {activities.map((activity) => {
        return (
          <div key={activity.id}>
            <h4>
              <Link to={`/activity/${activity.id}`}>{activity.name}</Link>
            </h4>
            <p>Distancia: {useKilometers(activity.distance, 1)} Km</p>
            <p>Desnivel Positivo: {activity.total_elevation_gain} m</p>
            <p>Tiempo: {useElapsed(activity.moving_time)}</p>
            <p>Velocidad Promedio {useSpeed(activity.average_speed)} Km/h</p>
          </div>
        );
      })}
    </div>
  );
};

export default Activities;
