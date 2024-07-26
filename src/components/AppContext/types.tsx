import React from "react";
import { IAccount } from "../../services/types";

export interface IAppContext {
  userData: IAccount | null;
  setUserData: (data: any) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

export interface AppContextProviderProps {
  children: React.ReactNode;
}
