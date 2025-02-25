import Loader from "@/components/Loader/Loader";
import useJsonFetch from "@/hooks/useJsonFetch";
import PropTypes from "prop-types";
import "./basic_component.css";

const BasicComponent = ({url, title, options}) => {
  const { defaultData } = options || "";
  const [data, loading, error] = useJsonFetch({url, defaultData: []});


  
  return (
    <div className="basic-component-wrapper">
      <h5>{title}</h5>
      <div className="basic-component-content">
        {loading && <Loader />}
        {!loading && (
          <div
            className={`basic-component ${
              error.length === 0 ? "bg-green" : "bg-red"
            }`}
          >
            {error.length === 0 && <div>{data.status}</div>}
            {error.length > 0 && (
              <ul className="basic-component-error-list">
                {error.map((errItem, index) => (
                  <li className="basic-component-error-item" key={index}>
                    {errItem}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

BasicComponent.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    options: PropTypes.object
}

export default BasicComponent;