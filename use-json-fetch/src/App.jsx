import "./App.css";
import backendUrl from "@/backend_url";
import BasicComponent from "@/components/BasicComponent/BasicComponent";

function App() {
  const url1 = backendUrl + "/data";
  const url2 = backendUrl + "/error";
  const url3 = backendUrl + "/loading";

  return (
    <>
      <div className="component-box">
        {[url1, url2, url3].map((url, index) => 
          (<BasicComponent url={url} key={index} title={url}/>)
        )}
      </div>
    </>
  );
}

export default App;
