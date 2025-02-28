import { useState } from "react";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import AuthContext from "@/contexts/AuthContext";

const Neto = () => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <AuthContext.Provider
      value={{ token, setToken, isAuthenticated, setIsAuthenticated }}
    >
      <Header />
      <Main />
    </AuthContext.Provider>
  );
};

export default Neto;
