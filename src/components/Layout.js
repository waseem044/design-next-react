"use client";
import { getActiveUser, logoutUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Layout({ children }) {
  const router = useRouter();
  const user = getActiveUser();

  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <div className="logo">MyApp</div>
        <div className="user-info">
          {user && <span>{user.username}</span>}
          {user && (
            <button
              onClick={() => {
                logoutUser();
                router.push("/login");
              }}
            >
              Logout
            </button>
          )}
        </div>
      </header>

      {/* Sidebar + Body */}
      <div className="content">
        <aside className="sidebar">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/posts">Posts</Link></li>
            <li><Link href="/comments">Comments</Link></li>
            <li><Link href="/albums">Albums</Link></li>
            <li><Link href="/photos">Photos</Link></li>
            <li><Link href="/todos">Todos</Link></li>
            <li><Link href="/recipes">Recipes</Link></li>
            <li><Link href="/carts">Carts</Link></li> 
            <li><Link href="/quotes">Quotes</Link></li>
            <li><Link href="/users">Users</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
            <li><Link href="/mui">Mui</Link></li>
          </ul>
        </aside>

        <main className="page-body">{children}</main>
      </div>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
}
