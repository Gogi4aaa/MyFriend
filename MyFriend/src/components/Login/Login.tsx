import { useState } from "react";
import "../Login/Login.css"
import { LoginCredentials } from "../../Interfaces/Login/Login";
import axios from "axios";
import SoundSelector from "../SoundSelector/SoundSelector";
let selectedSound: any;
export const Login = () => {
  
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const soundFiles = [
      "/sounds/sound1.mp3",
      "/sounds/sound2.mp3",
      "/sounds/sound3.mp3",
    ];
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login({ name, password });
      };
    const login = async (credentials: LoginCredentials): Promise<void> => {
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
    const showProfileInfo = () => {
        
    };
    return(
    //     <form onSubmit={handleSubmit}>
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     required
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     required
    //   />
    //   <button type="submit">Login</button>
    // </form>
    
    <>
      <header>
        <nav>
            <div className="logo-container">
                <img src="logo.png" alt="My friend" width="85" height="80" />
            </div>
            <div className="nav-buttons">
                <button >Начало</button>
                <button id="profile-button">Вход / Регистрация</button>
                <button id="games-button" disabled>Игри</button>
                <button id="profile-info-button" style={{display: "none"}} onClick={showProfileInfo}>Профил</button>
                <button id="logout-button" style={{display: "none"}} >Изход</button>
            </div>
        </nav>
    </header>

    <main>
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
              type="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <div className="sound-selection">
                <SoundSelector soundFiles={soundFiles}/>
            </div>
            <button id="register-button" onClick={handleSubmit}>Регистрация</button>
        </div>
    </main>
    </>
    )
}