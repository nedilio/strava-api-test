import React, { useEffect, useState } from "react";
import { getStats, getUser, getAthlete } from "../services";
import { useSearchParams } from "react-router-dom";

import "./Data.css";

const data = () => {
  const [status, setStatus] = useState(null);
  const [searchParams] = useSearchParams();
  const [code] = useState(searchParams.get("code"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      getAthlete(user.access_token).then((response) => console.log(response));
    }
  }, [user]);

  useEffect(() => {
    if (code) {
      getUser(code).then((response) => {
        console.log(response);
        setUser(response.data);
        setStatus(response.status);
      });
    }
  }, [code]);

  return (
    <div>
      <p>user code = {code}</p>
      {user && (
        <img
          className="status-cat"
          src={user.athlete.profile}
          //   src={`https://http.cat/${status}`}
          alt="result"
        />
      )}
    </div>
  );
};

export default data;
