import { useEffect, useState } from "react";

const useData = (options) => {
  const { url, defaultData } = options;
  const [data, setData] = useState(defaultData);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
            setError((prevState) => [...prevState, `service error with status code: ${res.status}`]);
            setLoading(false);
            return Promise.reject(res);
        }
        return res.json()})
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch(error => {
        if (typeof error.json === "function") {
            error
              .json()
              .then((jsonError) =>
                setError((prevState) => [...prevState, `error content from API: ${jsonError.status}`])
              )
              .catch((genericError) =>
                setError((prevState) => [...prevState, `generic error from API: ${genericError}`])
              );
        } else {
            setError((prevState) => [...prevState, "fetch error"])
        }
      })
  }, [url]);

  return [data, loading, error];
};

export default useData;