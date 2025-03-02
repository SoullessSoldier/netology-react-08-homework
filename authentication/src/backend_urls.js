const PORT = import.meta.env.VITE_BACKEND_PORT;

const backendUrls = {
  auth: `http://localhost:${PORT}/auth`,
  profile: `http://localhost:${PORT}/private/me`,
  news: `http://localhost:${PORT}/private/news`,
};

export default backendUrls;
