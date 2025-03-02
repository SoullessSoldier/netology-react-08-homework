import { useContext } from "react";
import Hero from "@/components/Hero/Hero";
import News from "@/components/News/News";
import AuthContext from "@/contexts/AuthContext";

const Main = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <main className="container main">
      {isAuthenticated ? <News /> : <Hero />}
    </main>
  );
};

export default Main;
