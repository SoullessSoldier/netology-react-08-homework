const fetchProfile = async (url, token) => {
  const bearer = `Bearer ${token}`;
  const headers = { Authorization: bearer };
  const response = await fetch(url, { headers });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return {};
};

const postAuth = async (url, payload) => {
    const response = await fetch(url, {
      method: "POST",
      body: payload,
    });
    if (response.status === 200) {
      const data = await response.json();
      return data.token || "";
    }
    return "";
}

const fetchNews = async (url, token) => {
  const bearer = `Bearer ${token}`;
  const headers = { Authorization: bearer };
  const response = await fetch(url, { headers });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return [];
};

export { fetchProfile, postAuth, fetchNews };
