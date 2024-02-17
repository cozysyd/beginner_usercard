import Proptypes from "prop-types";
import user from "./user.json";

const UserCard = () => {
  return (
    <div className="card">
      <h2 className="name">{user.name}</h2>
      <div className="body">
        <div className="label">Age:</div>
        <div>{user.age}</div>
        <div className="label">Phone Number:</div>
        <div>{user.phoneNumber}</div>
        <div className="label">Address:</div>
        <div>{user.address}</div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  children: Proptypes.node.isRequired,
  name: Proptypes.string.isRequired,
  phoneNumber: Proptypes.string.isRequired,
  age: Proptypes.number.isRequired,
  address: Proptypes.string.isRequired,
};

export default UserCard;
