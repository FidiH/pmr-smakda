import adapter from "@sveltejs/adapter-netlify"; // adaptor Netlify
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"; // preprocess bawaan

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // dukung file .svelte dan .md
    extensions: [".svelte"],

    // gabungkan vitePreprocess + mdsvex
    preprocess: [
        vitePreprocess(),
    ],

    kit: {
        adapter: adapter(), // deploy ke Netlify
        prerender: {
            entries: ["*"] // prerender semua halaman jadi statis
        }
    }
};

export default config;