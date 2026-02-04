export function getApiBaseUrl() {
  if (typeof window === "undefined") {
    // Server-side
    return process.env.API_URL || "http://localhost:5000";} 
    // Client-side
    return process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  }

export async function apiGet(path: string) {
  const base = getApiBaseUrl();
  const res = await fetch(`${base}${path}`, { cache: "no-store" });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API GET ${path} failed: ${res.status} ${text}`);
  }
    return res.json();
  };