import { NavLink } from "react-router-dom";

const NavMenu = ({ to, children }) => {
  return (
    <li>
      <NavLink
        className={(navData) => (navData.isActive ? "active-style" : "none")}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavMenu;
