import { useState } from "react";
import SoundSelector from "../SoundSelector/SoundSelector";
import Layout from "../Layout/Layout";
import axios from "axios";
import { AuthCredentials } from "../../Interfaces/Login/Auth";

const AuthPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const soundFiles = ["/sounds/sound1.mp3", "/sounds/sound2.mp3", "/sounds/sound3.mp3"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ name, password });
  };
const login = async (credentials: AuthCredentials): Promise<void> => {
try {
    const response = await axios.post("https://your-backend.com/api/login", credentials, {
    headers: { "Content-Type": "application/json" },
    });

    console.log("Login successful:", response.data);
    // Store token or handle user session if needed
    localStorage.setItem("token", response.data.token);
} catch (error) {
    console.error("Login failed:", error);
}
};

  return (
    <Layout>
      <div className="clouds">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
      </div>
      <div className="canvas">
        <div className="logo-container">
          <img src="logo.png" alt="My friend" width="85" height="80" />
        </div>
        <h1>Регистрация/ Вход</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="sound-selection">
          <SoundSelector soundFiles={soundFiles} />
        </div>
        <button id="register-button" onClick={handleSubmit}>
          Регистрация
        </button>
      </div>
    </Layout>
  );
};

export default AuthPage;
