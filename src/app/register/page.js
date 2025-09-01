"use client";
import { useState } from "react";
import { registerLocalUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      registerLocalUser({ username, email, password });
      router.push("/"); // auto-login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Register</h1>
      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </main>
  );
}
