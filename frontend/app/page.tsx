import { apiGet } from "../lib/api";

export default async function Home() {
  const posts =  apiGet("/api/posts");

  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: 40, fontWeight: "bold" }}>Campus Connect</h1>

      <h2 style={{ marginTop: 20 }}>Posts</h2>
      <pre
        style={{
          marginTop: 10,
          background: "#111",
          color: "#0f0",
          padding: 12,
        }}
      >
        {JSON.stringify(posts, null, 2)}
      </pre>
    </main>
  );
}