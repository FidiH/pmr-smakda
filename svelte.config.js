import adapter from "@sveltejs/adapter-netlify"; // adaptor Netlify
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"; // preprocess bawaan
import { mdsvex } from "mdsvex"; // agar bisa pakai file markdown

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // dukung file .svelte dan .md
    extensions: [".svelte", ".md"],

    // gabungkan vitePreprocess + mdsvex
    preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: [".md"] // semua file .md ikut diproses
        })
    ],

    kit: {
        adapter: adapter(), // deploy ke Netlify
        prerender: {
            entries: ["*"] // prerender semua halaman jadi statis
        }
    }
};

export default config;