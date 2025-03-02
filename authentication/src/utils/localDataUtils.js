import {
  getLocalStorageData,
  setLocalStorageData,
} from "@/utils/localStorageUtils";

const getLocalProfile = () => {
  return JSON.parse(getLocalStorageData("profile")) || {};
};

const setLocalProfile = (data) => {
  setLocalStorageData("profile", JSON.stringify(data));
};

const getLocalToken = () => {
  return getLocalStorageData("token");
};

const setLocalToken = (token) => {
  return setLocalStorageData("token", token);
};

export { getLocalProfile, setLocalProfile, getLocalToken, setLocalToken };
