import { useContext } from "react";
import { UserContext } from "./store/UserContext";

import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user.isLoggedIn ? <Profile /> : <Login />}
    </div>
  );
}

export default App;
