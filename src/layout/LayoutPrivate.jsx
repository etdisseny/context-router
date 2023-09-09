import { Outlet } from "react-router-dom";

const LayoutPrivate = () => {
  return (
    <Outlet /> //aqui solo ponemos el outlet, porque comparte el navbar y foolter del otro layout
  );
};
export default LayoutPrivate;
