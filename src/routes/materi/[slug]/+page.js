// src/routes/materi/[slug]/+page.js
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const modules = import.meta.glob('../*.md');

  const match = modules[`../${params.slug}.md`];

  // kalau slug tidak cocok dengan file markdown
  if (!match) {
    throw error(404, 'Materi tidak ditemukan');
  }

  const post = await match();

  return {
    content: post.default,
    meta: post.metadata
  };
}