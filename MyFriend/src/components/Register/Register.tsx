import { useState } from "react";

import Layout from "../Layout/Layout";
import axios from "axios";
import "../Auth/Auth.css";
const apiUrl = import.meta.env.VITE_API_URL;
const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("test");
    
    if (!name || !password || !email) {
        console.log("Всички полета са задължителни!");
        return;
    }
    
    if (password.length < 6) {
        console.log("Паролата трябва да е поне 6 символа!");
        return;
    }
    
    await register({ username:name, email, password });
};

const register = async (credentials: { username: string; email: string; password: string }): Promise<void> => {
    try {
        const response = await axios.post(`${apiUrl}/api/auth/register`, credentials, {
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
      <div className="canvas">
        <div className="logo-container">
          <img src="https://res.cloudinary.com/dzrp3c1cv/image/upload/v1740601496/g2g03wloxkvdiacox5uv.png" alt="My friend" width="85" height="80" />
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
