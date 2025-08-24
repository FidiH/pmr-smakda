// src/routes/api/pendaftar/+server.js
import { json } from "@sveltejs/kit";

// server only, ambil env
import { PRIVATE_GAS_URL } from "$env/static/private";

export async function GET() {
  const res = await fetch(PRIVATE_GAS_URL);
  const data = await res.json();

  return json(data);
}
