"use client";
import { useEffect, useState } from "react";
import { getActiveUser, logoutUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import Link from "next/link";

const sections = [
  { title: "Posts", link: "/posts", img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Posts" },
  { title: "Comments", link: "/comments", img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Comments" },
  { title: "Albums", link: "/albums", img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Albums" },
  { title: "Photos", link: "/photos", img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Photos" },
  { title: "Todos", link: "/todos", img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Todos" },
  { title: "Recipes", link: "/recipes", img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Recipes" },
  { title: "Carts", link: "/carts", img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Carts" },
  { title: "Quotes", link: "/quotes", img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Quotes" },
  { title: "Users", link: "/users", img: "https://dummyjson.com/image/400x200/008080/ffffff?text=Users" },
];

export default function HomePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const active = getActiveUser();
    if (!active) {
      router.push("/login");
    } else {
      setUser(active);
    }
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <Layout>
      <h1>Welcome {user.username}</h1>
      <p>Email: {user.email}</p>

      <div className="card-grid">
        {sections.map((s) => (
          <Link
            key={s.title}
            href={s.link}
            className="card"
            role="button"
            tabIndex={0}
          >
            <img src={s.img} alt={s.title} />
            <div className="card-body">
              <h3>{s.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
