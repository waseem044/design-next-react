import Layout from "@/components/Layout";

export default async function QuotesPage() {
  const res = await fetch("https://dummyjson.com/quotes");
  const data = await res.json();
  const quotes = data.quotes || [];

  return (
    <Layout>
      <h1>Quotes</h1>
        {quotes.slice(0, 10).map((quote) => (
          <div key={quote.id} style={{ marginBottom: "15px" }}>
            <blockquote>"{quote.quote}"</blockquote>
            <p>— {quote.author}</p>
          </div>
        ))}
    </Layout>
  );
}
