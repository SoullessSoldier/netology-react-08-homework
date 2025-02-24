//import classnames from "classnames";
//import "./loader.module.css";
import classes from "./loader.module.css";

const Loader = () => {
  return (
    <>
      <section className={`${classes["loader-section"]}`}>
        <div className={`${classes["loader"]} ${classes["loader-3"]}`}>
          <div className={`${classes["dot"]} ${classes["dot1"]}`}></div>
          <div className={`${classes["dot"]} ${classes["dot2"]}`}></div>
          <div className={`${classes["dot"]} ${classes["dot3"]}`}></div>
        </div>
      </section>
    </>
  );
};

export default Loader;
