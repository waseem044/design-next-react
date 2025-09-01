// Save a new user
export function registerLocalUser(user) {
  let users = JSON.parse(localStorage.getItem("users") || "[]");

  // check if username already exists
  if (users.find((u) => u.username === user.username)) {
    throw new Error("Username already exists");
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("activeUser", JSON.stringify(user));
}

// Login with username + password
export function loginLocalUser(username, password) {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) throw new Error("Invalid credentials");
  localStorage.setItem("activeUser", JSON.stringify(user));
  return user;
}

// Get active user
export function getActiveUser() {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("activeUser");
    return stored ? JSON.parse(stored) : null;
  }
  return null;
}

// Logout only clears active session
export function logoutUser() {
  localStorage.removeItem("activeUser");
}

// Get all users (optional for debugging)
export function getAllUsers() {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  }
  return [];
}
