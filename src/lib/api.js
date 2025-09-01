export async function loginUser(username, password) {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  if (!res.ok) throw new Error("Login failed");
  return res.json();
}

export async function registerUser(username, email, password) {
  const res = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password })
  });

  if (!res.ok) throw new Error("Register failed");
  return res.json();
}

export async function fetchData(endpoint) {
  const res = await fetch(`https://jsonplaceholder.typicode.com${endpoint}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}