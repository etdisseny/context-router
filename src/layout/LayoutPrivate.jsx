import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

const LayoutPrivate = () => {
  const { user } = useUserContext(); // traigo el user
  const navigate = useNavigate();
  //con el useEffect, compruebo que cada vez qeu se cambie el user, haga algo. En este caso volver a la home
  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <Outlet /> //aqui solo ponemos el outlet, porque comparte el navbar y foolter del otro layout
  );
};
export default LayoutPrivate;
