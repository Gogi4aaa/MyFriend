import { useState } from "react";
import SoundSelector from "../SoundSelector/SoundSelector";
import Layout from "../Layout/Layout";
import axios from "axios";
import { AuthCredentials } from "../../Interfaces/Login/Auth";
import "../Auth/Auth.css";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const soundFiles = ["/sounds/sound1.mp3", "/sounds/sound2.mp3", "/sounds/sound3.mp3"];

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !password || !email) {
        console.error("Всички полета са задължителни!");
        return;
    }
    
    if (password.length < 6) {
        console.error("Паролата трябва да е поне 6 символа!");
        return;
    }
    
    await register({ name, email, password });
};

const register = async (credentials: { name: string; email: string; password: string }): Promise<void> => {
    try {
        const response = await axios.post("https://your-backend.com/api/register", credentials, {
            headers: { "Content-Type": "application/json" },
        });
        
        console.log("Registration successful:", response.data);
        // Store token or handle user session if needed
        localStorage.setItem("token", response.data.token);
    } catch (error) {
        console.error("Registration failed:", error);
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
        <h1>Регистрация</h1>
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button id="register-button" onClick={handleRegister}>
          Регистрация
        </button>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
