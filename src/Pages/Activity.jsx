import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "../components/Map/Map";
import { StravaContext } from "../context/StravaContext";
import { useElapsed, useKilometers, useSpeed } from "../hooks";
import { getActivity } from "../services";

const Activity = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState({});
  const { user } = useContext(StravaContext);
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    if (user.access_token) {
      getActivity(id, user.access_token)
        .then((res) => {
          setActivity(res);
          setLoadMap(true);
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
          setActivity({});
        });
    } else {
      setLoadMap(false);
    }
  }, [user]);
  return (
    <>
      {loadMap ? (
        <Map
          activityMap={activity.map}
          begin={{
            lon: activity.start_latlng[1],
            lat: activity.start_latlng[0],
          }}
          end={{
            lon: activity.end_latlng[1],
            lat: activity.end_latlng[0],
          }}
        ></Map>
      ) : (
        <p>Loading..</p>
      )}
      {loadMap && (
        <div className="ride-stats">
          <p>AVG π {activity.average_heartrate} BPM</p>
          <p>AVG π΄π»ββοΈπ¨ {useSpeed(activity.average_speed)} Km/h</p>
          <p>AVG π‘ {activity.average_temp}ΒΊC</p>
          <p>AVG π git st{activity.average_watts}W</p>
          <p>π {useKilometers(activity.distance)} Km</p>
          <p>βοΈ {useElapsed(activity.elapsed_time)}</p>
        </div>
      )}
    </>
  );
};

export default Activity;
