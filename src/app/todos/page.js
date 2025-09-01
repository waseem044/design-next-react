"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/api";
import Layout from "@/components/Layout";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData("/todos").then(setTodos).catch(console.error);
  }, []);

  return (
    <Layout>
      <h1>Todos</h1>
        {todos.slice(0, 10).map((t) => (
          <div key={t.id}>
            <input type="checkbox" checked={t.completed} readOnly /> {t.title}
          </div>
        ))}
    </Layout>
  );
}
