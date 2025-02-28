import { useContext } from "react";
import Signin from "@/components/Signin/Signin";
import Profile from "@/components/Profile/Profile";
import AuthContext from "../contexts/AuthContext";
import "./header.css";

const Header = () => {
  const { token, isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <header className="container header">
        <a href="/">
          <div className="logo">Neto Social</div>
        </a>
        {isAuthenticated ? <Signin /> : <Profile />}
      </header>
    </>
  );
};

export default Header;
