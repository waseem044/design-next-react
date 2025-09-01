"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/api";
import Layout from "@/components/Layout";

export default function AlbumsPage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchData("/albums").then(setAlbums).catch(console.error);
  }, []);

  return (
    <Layout>
      <h1>Albums</h1>
      <ul>
        {albums.slice(0, 10).map((a) => (
          <li key={a.id}>{a.title}</li>
        ))}
      </ul>
    </Layout>
  );
}
