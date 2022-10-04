import React, { useContext, useEffect, useState } from "react";
import { getUser } from "../services";
import { useSearchParams, useNavigate } from "react-router-dom";

import "./Data.css";
import { StravaContext } from "../context/StravaContext";

const data = () => {
  const { logginUser, addUser } = useContext(StravaContext);
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const [status, setStatus] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser(code);
      setStatus(data.status);
      addUser(data.data);
      logginUser();
      navigate(`/user`);
    };
    fetchData();
  }, []);

  return (
    <div>
      <img
        className="status-cat"
        src={`https://http.cat/${status}`}
        alt="result"
      />
    </div>
  );
};

export default data;
