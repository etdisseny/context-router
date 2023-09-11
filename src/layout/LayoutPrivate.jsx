import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

const LayoutPrivate = () => {
  const { user } = useUserContext(); // traigo el user

  // const navigate = useNavigate();

  //con el useEffect, compruebo que cada vez qeu se cambie el user, haga algo. En este caso volver a la home
  //Existe una alternativa al useEffect, que es utilizar en Navigate de react-router-dom directamente

  /*useEffect(() => {
    console.log(user);
    if (!user) {
      navigate("/");
    }
  }, [user]);*/

  return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};
export default LayoutPrivate;
