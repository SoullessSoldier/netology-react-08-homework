import { createContext } from "react";

const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
});

export default AuthContext;
