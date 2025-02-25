import Loader from "@/components/Loader/Loader";
import { useState } from "react";
import UserList from "@/components/UserList/UserList";
import UserDetails from "@/components/UserDetails/UserDetails";
import backendUrl from "@/backend_url";
import "./userlistloader.css";
import useData from "@/hooks/useData";


const UserListLoader = () => {
  const [userData, setUserData] = useState(null);
  const url = backendUrl + "users.json";
  const [data,loading] = useData({url, defaultData: []});

  const handleUserClick = (user) => {
    setUserData(user);
  };
  
  return (
    <div className="user-list-wrapper">
      {loading && <Loader />}
      {!loading && (
        <div className="user-list-loader">
          <UserList data={data} selectedUserId={userData?.id} onUserClick={handleUserClick} />
          {userData && <UserDetails data={userData} />}
        </div>
      )}
    </div>
  );
};

export default UserListLoader;
