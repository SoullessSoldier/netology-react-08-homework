import "./signin.css";

const Signin = () => {
    return (
      <form className="signin">
        <input
          className="form-control"
          type="text"
          name="user"
          placeholder="Username"
          required
        />
        <input
          className="form-control"
          type="text"
          name="password"
          placeholder="Password"
          required
        />
        <button className="btn btn-outline-success" type="submit">
          Login
        </button>
      </form>
    );
}

export default Signin;