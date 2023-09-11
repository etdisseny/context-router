import { createContext, useContext, useState } from "react";

//creo el contexto en la const UserContext
export const UserContext = createContext();

//creo el provider, que envolverá todo el contenido
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;

//creamos un pequeño hook, para no tener qeu estar importando el userContext y el useContext en cada página

export const useUserContext = () => useContext(UserContext);
