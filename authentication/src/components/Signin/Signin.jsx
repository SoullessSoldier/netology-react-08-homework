import { useContext, useState } from "react";
import AuthContext from "@/contexts/AuthContext";
import { postAuth } from "@/utils/fetchData";
import backendUrls from "@/backend_urls";
import "./signin.css";
import { setLocalToken, setLocalProfile } from "@/utils/localDataUtils";
import { fetchProfile } from "@/utils/fetchData";

const Signin = () => {
  const { setIsAuthenticated, setToken } = useContext(AuthContext);
  const [ invalidCred, setInvalidCred ] = useState(false);


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let url = backendUrls.auth;
    const formData = new FormData(e.target);
    const data = { login: formData.get("login"), password: formData.get("password") };
    const token = await postAuth(url, JSON.stringify(data));
    if (token) {      
      setLocalToken(token);
      url = backendUrls.profile;
      const profile = await fetchProfile(url, token);      
      setLocalProfile(profile);
      setToken(token);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      setLocalProfile({});
      setInvalidCred(true);
      setTimeout(() => {
        setInvalidCred(false);        
      }, 5000);
    }
  }
    return (
      <form className="signin" onSubmit={handleFormSubmit}>
        <input
          className={`form-control ${invalidCred ? "form-control-red" : ""}`}
          type="text"
          autoComplete="username"
          name="login"
          placeholder="Username"
          required
        />
        <input
          className={`form-control ${invalidCred ? "form-control-red" : ""}`}
          type="password"
          autoComplete="current-password"
          name="password"
          placeholder="Password"
          required
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          disabled={invalidCred}
        >
          Login
        </button>
      </form>
    );
}

export default Signin;