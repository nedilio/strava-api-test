import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";

const Activities = ({ activities }) => {
  return (
    <div>
      <h3>Activities</h3>
      {activities.map((activity) => {
        return <ActivityCard key={activity.id} activity={activity} />;
      })}
    </div>
  );
};

export default Activities;
