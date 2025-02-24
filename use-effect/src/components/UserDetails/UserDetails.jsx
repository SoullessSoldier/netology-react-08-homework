import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import delay from "@/utils/delay";
import {capitalize} from "@/utils/str_utils";
//import fetchAndConvertToBase64 from "@/utils/img_util";
import backendUrl from "@/backend_url";
import Loader from "@/components/Loader/Loader";
import "./user_details.css"

const UserDetails = ({ data }) => {
  const [details, setDetails] = useState(null);
  const [cachedDetails, setCachedDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cachedDetails[data.id]) {
      setDetails(cachedDetails[data.id]);
      setLoading(false);
    } else {
      setLoading(true);
      delay(5000)
        .then(() => {
          const url = backendUrl + `${data.id}.json`;
          return fetch(url);
        })
        .then((res) => res.json())
        .then(async (userData) => {
          /* функция не работает из-за того, что на сервере API применяется CORS,
             но замысел был кешировать Base64-содержимое рисунка, чтобы избежать других изощрений с картинкой 
          userData.avatar = await fetchAndConvertToBase64(userData.avatar); 
          */
          userData.avatar += `?${userData.id}`; //эта строка вынужденная, так как у всех картинок одинаковый адрес
          setDetails(userData);
          setCachedDetails((prevState) => ({
            ...prevState,
            [data.id]: userData,
          }));
          setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching user details", error);
            setLoading(false);
        })
    }
  }, [data.id, cachedDetails]);
  return (
    <div className="user-details-wrapper">
      {loading && <Loader />}
      {!loading && details && (
        <div className="user-details">
          <img
            className="user-details-img"
            src={details.avatar}
            alt="User image"
          />
          <p className="user-details-name">{details.name}</p>
          {Object.keys(details.details).map((item, index) => (
            <p className="user-details-item" key={index}>
              {capitalize(item)}: {details.details[item]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

UserDetails.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default UserDetails;
