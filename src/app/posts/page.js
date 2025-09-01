"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/api";
import Layout from "@/components/Layout";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData("/posts").then(setPosts).catch(console.error);
  }, []);

  return (
    <Layout>
      <h1>Posts</h1>

        {posts.slice(0, 10).map((post) => (
          <div key={post.id} style={{ border: "1px solid grey", marginBottom: "5px"}}>
            <div style={{ borderBottom: "1px solid grey", marginBottom: "5px"}}><span>Title:</span><strong>{post.title}</strong></div>
            <div><span>Description:</span><p>{post.body}</p></div>
          </div>
        ))}
    
    </Layout>
  );
}
