"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/api";
import Layout from "@/components/Layout";

export default function PhotosPage() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchData("/photos").then(setPhotos).catch(console.error);
  }, []);

  return (
    <Layout>
      <h1>Photos</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
        {photos.slice(0, 20).map((p) => (
          <div key={p.id}>
            <img src="https://sherohomefood.in/wp-content/uploads/2021/05/SHF_home-slide-1.jpg" height={150} width={200} alt={p.title} />
            <p>{p.title}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
