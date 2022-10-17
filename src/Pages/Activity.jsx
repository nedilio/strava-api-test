import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "../components/Map/Map";
import { StravaContext } from "../context/StravaContext";
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
    <div>
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
    </div>
  );
};

export default Activity;
