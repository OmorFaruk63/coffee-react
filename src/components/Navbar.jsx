import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to={"/"}>All Products</NavLink>
      <NavLink to={"/availableNow"}>Available Now</NavLink>
    </nav>
  );
};

export default Navbar;
