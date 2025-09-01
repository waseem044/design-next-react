import Layout from "@/components/Layout";

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <Layout>
      <h1>Users</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Username</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Phone</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Website</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{u.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{u.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{u.username}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{u.email}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{u.phone}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{u.website}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{u.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
