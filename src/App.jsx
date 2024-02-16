import "./user.css";
import UserCard from "./UserCard";
import name from "./user.json";

function App() {
  return <UserCard name={name} />;
}

export default App;
