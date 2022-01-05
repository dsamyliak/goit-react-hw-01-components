import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className="status" status={isOnline ? "Online" : "Offline"}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
