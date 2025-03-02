import { useEffect, useState } from "react";

const useGetProfile = (options) => {
    const {url, token} = options;
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchProfile = async (url, token) => {
        const bearer = `Bearer ${token}`;
        const headers = { Authorization: bearer };
        setLoading(true);
        const response = await fetch(url, { headers });
        if (response.status === 200) {
          const data = await response.json();
          setProfile(data);
        } else {
          setProfile(null);
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchProfile(url, token)
    }, [url, token])


    return [profile, loading];
}

export default useGetProfile;