import Layout from "@/components/Layout";

export default async function CartsPage() {
  const res = await fetch("https://dummyjson.com/carts");
  const data = await res.json();
  const carts = data.carts || [];

  return (
    <Layout>
      <h1>Carts</h1>
      {carts.map((cart) => (
        <div key={cart.id} style={{ border: "1px solid #ccc", marginBottom: "20px", padding: "15px", borderRadius: "8px" }}>
          <h3>Cart #{cart.id}</h3>
          <p><strong>Total:</strong> ${cart.total} | <strong>Discounted:</strong> ${cart.discountedTotal}</p>
          <p><strong>User ID:</strong> {cart.userId}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "15px", marginTop: "10px" }}>
            {cart.products.map((p) => (
              <div key={p.id} style={{ border: "1px solid #eee", borderRadius: "6px", padding: "10px" }}>
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "6px" }}
                />
                <h4>{p.title}</h4>
                <p>Qty: {p.quantity}</p>
                <p>Price: ${p.price}</p>
                <p><strong>Total:</strong> ${p.total}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
}
