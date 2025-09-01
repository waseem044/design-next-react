"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/api";
import Layout from "@/components/Layout";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData("/comments").then(setComments).catch(console.error);
  }, []);

  return (
    <Layout>
      <h1>Comments</h1>
        {comments.slice(0, 10).map((c) => (
          <div key={c.id} style={{ border: "1px solid grey", marginBottom: "5px"}}>
            <div style={{ borderBottom: "1px solid grey", marginBottom: "5px"}}><span>Name:</span><strong> {c.name}</strong> <span>Email:</span> ({c.email})</div>
            <div><span>Comments:</span><p>{c.body}</p></div>
          </div>
        ))}
    </Layout>
  );
}
