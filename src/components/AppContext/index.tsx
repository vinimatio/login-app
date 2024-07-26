import { createContext, useEffect, useState } from "react";
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

  const session = getAllLocalStorage();

  useEffect(() => {
    if (session) {
      const { login } = JSON.parse(session);
      setIsLoggedIn(login);
      userData?.id && navigate(`/conta/${userData.id}`);
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
