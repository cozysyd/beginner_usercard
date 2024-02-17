import Proptypes from "prop-types";
import "./user.json";

export function UserCard({ name, phoneNumber, age, address }) {
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
  name: Proptypes.string.isRequired,
  phoneNumber: Proptypes.string.isRequired,
  age: Proptypes.number.isRequired,
  address: Proptypes.string.isRequired,
};
