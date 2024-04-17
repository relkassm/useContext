import { useContext } from "react";
import { UserContext } from "../store/UserContext";

function Profile() {
  const { user, logout } = useContext(UserContext);
  return (
    <div>
      <h2>Profile</h2>
      <h4>User: {user.username}</h4>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

export default Profile;
