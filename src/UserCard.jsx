import Proptypes from "prop-types";
import "./user.json";

function UserCard({ children }) {
  const { name, age, phoneNumber, address } = children;

  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <div className="body">
        <div className="label">Age:</div>
        <div>{age}</div>
        <div className="label">Phone Number:</div>
        <div>{phoneNumber}</div>
        <div className="label">Address:</div>
        <div>{address}</div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  children: Proptypes.node.isRequired,
  name: Proptypes.string.isRequired,
  phoneNumber: Proptypes.string.isRequired,
  age: Proptypes.number.isRequired,
  address: Proptypes.string.isRequired,
};

export default UserCard;
