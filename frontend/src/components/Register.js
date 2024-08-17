import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://matchmakingjasiri.onrender.com/register", { name, bio })
      .then((response) => {
        alert("User registered successfully");
      })
      .catch((error) => {
        alert("Error registering user");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
