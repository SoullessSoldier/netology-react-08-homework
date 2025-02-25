import { useEffect, useState } from "react";
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

export default useData;
