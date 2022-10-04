import React from "react";
import { useElapsed } from "./hooks/index";

const Activities = ({ activities }) => {
  const speedConstant = 3.600675939165475;

  return (
    <div>
      <h3>Activities</h3>
      {activities.map((activity) => {
        console.log(useElapsed(activity.moving_time));
        return (
          <div key={activity.id}>
            <h4>{activity.name}</h4>
            <p>Distancia: {(activity.distance / 1000).toFixed(1)} Km</p>
            <p>Desnivel Positivo: {activity.total_elevation_gain} m </p>
            <p>Tiempo: {useElapsed(activity.moving_time)} </p>
            <p>
              Velocidad Promedio{" "}
              {(activity.average_speed * speedConstant).toFixed(1)} Km/h
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Activities;
