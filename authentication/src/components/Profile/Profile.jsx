import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-title">Hello, Vasya</div>
      <img
        className="profile-avatar-img"
        src="https://i.pravatar.cc/40"
        alt=""
      />
      <button className="btn btn-outline-danger">Logout</button>
    </div>
  );
};

export default Profile;
