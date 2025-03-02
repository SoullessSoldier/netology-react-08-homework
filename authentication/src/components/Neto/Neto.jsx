import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import AuthContext from "@/contexts/AuthContext";
//import useGetProfile from "@/hooks/useGetProfile";
import backendUrls from "@/backend_urls";

import {
  setLocalProfile,
  getLocalProfile,
  getLocalToken,
  setLocalToken,
} from "@/utils/localDataUtils";

import { fetchProfile } from "@/utils/fetchData";

const Neto = () => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const localToken = getLocalToken();
    const getData = async (url, token) => {
      const data = await fetchProfile(url, token);
      setProfile(data);
      setLocalProfile(data);
      //return data;
    };

    if (localToken) {
      const url = backendUrls.profile;
      getData(url, localToken).then(() => {
        const localProfile = getLocalProfile();
        if (Object.keys(localProfile).length) {
          //setLocalProfile(profile);
          setToken(localToken);
          setIsAuthenticated(true);
        } else {
          setLocalToken("");
          setLocalProfile({});
          setToken(null);
          setProfile({});
          setIsAuthenticated(false);
        }
      });
    }
  }, []);

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
