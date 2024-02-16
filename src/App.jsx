import "./user.css";
import UserCard from "./UserCard";
import name from "./user.json";
import age from "./user.json";
import phoneNumber from "./user.json";
import address from "./user.json";

function App() {
  return (
    <UserCard
      name={name}
      age={age}
      phoneNumber={phoneNumber}
      address={address}
    />
  );
}

export default App;
