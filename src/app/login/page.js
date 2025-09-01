"use client";
import { useState } from "react";
import { loginLocalUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      loginLocalUser(username, password);
      router.push("/"); // go to home
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        Don’t have an account? <a href="/register">Register</a>
      </p>
    </main>
  );
}
