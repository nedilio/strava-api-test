import React, { useContext, useEffect, useState } from "react";
import { getUser } from "../../services";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

import "./Data.css";
import { StravaContext } from "../../context/StravaContext";

const data = () => {
  const { logginUser, addUser, userLogged } = useContext(StravaContext);
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const [status, setStatus] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser(code);
      if (data.status === 200) {
        setStatus(data.status);
        logginUser();
        addUser(data.data);
        setTimeout(() => {
          // navigate("/user");
        }, 1000);
      }
    };
    if (!userLogged) {
      fetchData();
    }
  }, []);

  return (
    <div>
      <img
        className="status-cat"
        src={`https://http.cat/${status}`}
        alt="result"
      />
      {status === 200 && (
        <button>
          <Link to="/user">User</Link>
        </button>
      )}
    </div>
  );
};

export default data;
