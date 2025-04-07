import React, { createContext, useState } from "react";
import { useNavigate } from "react-router";

type AppContextType = {
  navigate: ReturnType<typeof useNavigate>;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  isSeller: boolean;
  setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
  showuserLogin:boolean;
  setShowUserLogin:React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType>({
  navigate: () => {},
  user:true,
  setUser: () => {},
  isSeller: false,
  setIsSeller: () => {},
  showuserLogin:false,
  setShowUserLogin:()=>{}
});

const AppContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<boolean>(false);
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const [showuserLogin,setShowUserLogin] = useState<boolean>(false);

  const value: AppContextType = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showuserLogin,
    setShowUserLogin
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
