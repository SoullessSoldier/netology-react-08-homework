import Hero from "@/components/Hero/Hero";
import News from "@/components/News/News";

const Main = () => {
    const isAuthenticated = true;
    return (<main className="container main">{isAuthenticated ? <Hero /> : <News />}</main>);
}

export default Main;