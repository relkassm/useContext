import { useState, useContext } from "react";
import { UserContext } from "../store/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(UserContext);

  const submitHandler = (event) => {
    event.preventDefault();
    login(username);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default Login;
