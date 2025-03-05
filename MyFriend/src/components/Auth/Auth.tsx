import { useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import { AuthCredentials } from "../../Interfaces/Login/Auth";
import "../Auth/Auth.css";
const apiUrl = import.meta.env.VITE_API_URL;
const AuthPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ username:name, password });
  };
const login = async (credentials: AuthCredentials): Promise<void> => {
try {
    const response = await axios.post(`${apiUrl}/api/auth/login`, credentials, {
    headers: { "Content-Type": "application/json" },
    });

    console.log("Login successful:", response.data);
    // Store token or handle user session if needed
    localStorage.setItem("token", response.data.token);
} catch (error) {
    console.error("Login failed:", error);
    setError("Невалидно потребителско име или парола!");
}
};

  return (
    <Layout>
      <div className="canvas">
        <div className="logo-container">
          <img src="https://res.cloudinary.com/dzrp3c1cv/image/upload/v1740601496/g2g03wloxkvdiacox5uv.png" alt="My friend" width="85" height="80" />
        </div>
        <h1>Вход</h1>
        <div className="login-box">
        <input
        className="mb-2 form-control"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="mb-2 form-control"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* <div className="sound-selection">
          <SoundSelector soundFiles={soundFiles} />
        </div> */}
        <button id="register-button" onClick={handleSubmit}>
          Вход
        </button>
        <span className={error ? "" : "hidden"}></span>
        </div>
      </div>
    </Layout>
  );
};

export default AuthPage;
