import { NavLink } from "react-router-dom";

const NavMenu = ({ to, children }) => {
  return (
    <NavLink
      className={(navData) => (navData.isActive ? "active-style" : "none")}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default NavMenu;
