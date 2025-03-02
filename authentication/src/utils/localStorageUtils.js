const setLocalStorageData = (key, data) => {
  if (key) {
    if (typeof data !== "object") {
      localStorage.setItem(key, data);
    } else {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }
};

const getLocalStorageData = (key) => {
  if (!key) return null;
  return localStorage.getItem(key);
};

export { setLocalStorageData, getLocalStorageData };