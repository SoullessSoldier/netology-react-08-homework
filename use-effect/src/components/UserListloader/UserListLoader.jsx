import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";
import UserList from "@/components/UserList/UserList";
import UserDetails from "@/components/UserDetails/UserDetails";
import backendUrl from "@/backend_url";
import "./userlistloader.css";
import delay from "@/utils/delay";


const useData = (options) => {
  const { url, defaultData } = options;
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    delay(5000)
      .then(() => fetch(url))
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, []);

  return [data, loading];
};



const UserListLoader = () => {
  const [userData, setUserData] = useState(null);
  const url = backendUrl + "users.json";
  const [data,loading] = useData({url, defaultData: []});

  const handleUserClick = (user) => {
    console.log("userData", userData)
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
