import { useState } from "react";
import "../Login/Login.css"
import { LoginCredentials } from "../../Interfaces/Login/Login";
import axios from "axios";
export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login({ email, password });
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
    return(
        <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
    )
}