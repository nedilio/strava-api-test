import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StravaContext } from "../../context/StravaContext";
import "./Nav.css";

const Nav = () => {
  const { userLogged } = useContext(StravaContext);
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* {userLogged && (
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
      )} */}
    </ul>
  );
};

export default Nav;
