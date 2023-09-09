import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

const LayoutRoot = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <p>Footer</p>
    </>
  );
};
export default LayoutRoot;
