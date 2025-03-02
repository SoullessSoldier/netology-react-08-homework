import { useContext, useEffect, useState } from "react";
import AuthContext from "@/contexts/AuthContext";
import "./profile.css";
import {
  setLocalProfile,
  getLocalProfile,
  setLocalToken,
} from "@/utils/localDataUtils";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const { setIsAuthenticated } = useContext(AuthContext);
  const signOut = () => {
    setIsAuthenticated(false);
    setLocalToken("");
    setLocalProfile({});
  }

  useEffect(() => {
    const localProfile = getLocalProfile();
    setProfile(localProfile); 
  }, [])

  return (
    <div className="profile">
      <div className="profile-title">Hello, {profile.name}</div>
      <img className="profile-avatar-img" src={profile.avatar} alt="" />
      <button className="btn btn-outline-danger" onClick={signOut}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
