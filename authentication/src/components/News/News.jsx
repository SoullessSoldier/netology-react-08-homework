import { useEffect, useState, useContext } from "react";
import AuthContext from "@/contexts/AuthContext";
import { fetchNews } from "@/utils/fetchData";
import backendUrls from "@/backend_urls";
import "./news.css";

const News = () => {
  const [news, setNews] = useState([]);
  const { token } = useContext(AuthContext);
  const url = backendUrls.news;

  useEffect(() => {
    const getData = async (url, token) => {
      const data = await fetchNews(url, token);
      setNews(data);
    };
    getData(url, token);
  }, []);

  return (
    <div className="news">
      { news && (
        <ul className="news-list">
          {news.map((newsItem) => (
            <li key={newsItem.id}>
              <div className="news-item">
                <img className="news-item-img" src={newsItem.image} />
                <h5 className="news-item-title">{newsItem.title}</h5>
                <p className="news-item-content">{newsItem.content}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
