import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export const NavBar = () => {
  const { user, setUser } = useUserContext(); //utilizamos el mini hook que hemo creado y desestructruramos su contendo
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |
      {user && ( //podemos simmular si existe el usuario o no pinta el dashboard
        <>
          <NavLink to="/dashboard"> Dashboard</NavLink>
          <button onClick={() => setUser(false)}>Logout</button>
        </>
      )}
    </nav>
  );
};
