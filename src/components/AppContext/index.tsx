import { createContext, useEffect, useRef, useState } from "react";
import { IAppContext, AppContextProviderProps } from "./types";
import { api } from "../../services/api";
import { IAccount } from "../../services/types";
import { getAllLocalStorage } from "../../services/storage";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [userData, setUserData] = useState<IAccount | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const navigateRef = useRef(navigate);

  const session = getAllLocalStorage();

  useEffect(() => {
    const navigate = navigateRef.current;
    if (session) {
      const { login } = JSON.parse(session);
      setIsLoggedIn(login);
      if (login) {
        navigate(`/conta/${userData?.id}`);
      }
    }
  }, [session, userData]);

  const getData = async () => {
    const fromApi = await api;
    setUserData(fromApi);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{ userData, setUserData, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AppContext.Provider>
  );
};
