import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "../components/Map";
import { StravaContext } from "../context/StravaContext";
import { getActivity } from "../services";

const Activity = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState({});
  const { user } = useContext(StravaContext);
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    getActivity(id, user.access_token).then((res) => {
      setActivity(res);
      setLoadMap(true);
    });
  }, []);

  return (
    <div>
      {loadMap && (
        <Map
          activityMap={activity.map}
          begin={activity.start_latlng}
          end={activity.end_latlng}
        ></Map>
      )}
    </div>
  );
};

export default Activity;
