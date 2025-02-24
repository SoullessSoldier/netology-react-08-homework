import PropTypes from "prop-types";
import "./user_list.css"

const UserList = ({ data, selectedUserId, onUserClick }) => {
  return (
    <ul className="user-list">
      {data.map((user) => (
        <li
          className={`user-item ${
            user.id === selectedUserId ? "user-item-active" : ""
          }`}
          onClick={() => onUserClick(user)}
          key={user.id}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
};

UserList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedUserId: PropTypes.number,
  onUserClick: PropTypes.func,
};

export default UserList;
