import Layout from "@/components/Layout";

export default async function RecipesPage() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  const recipes = data.recipes || [];

  return (
    <Layout>
      <h1>Recipes</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
        {recipes.slice(0, 12).map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px" }}>
              <h3>{recipe.name}</h3>
              <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
