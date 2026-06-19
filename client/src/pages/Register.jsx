import { useState } from "react";
import API from "../services/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/register", {
        name,
        email,
        password,
      });

      alert(res.data.message);
    } 
    catch (error) {
      console.log(error);
      console.log(error.response);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Registration failed"
      );
    }
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;