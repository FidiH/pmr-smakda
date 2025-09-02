// src/routes/materi/+page.js
export async function load() {
  const modules = import.meta.glob('./*.md');
  const posts = [];

  for (const [path, resolver] of Object.entries(modules)) {
    const post = await resolver();
    posts.push({
      path: path.replace('./', '/materi/').replace('.md', ''),
      meta: post.metadata
    });
  }

  return { posts };
}