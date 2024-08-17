import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://your-backend-url.onrender.com/login", { name })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        alert("User not found");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      {user && (
        <div>
          <h3>Welcome, {user.name}</h3>
          <p>{user.bio}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
