

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.8148204f.js","_app/immutable/chunks/index.5771b8a3.js"];
export const stylesheets = ["_app/immutable/assets/0.e69b7982.css"];
export const fonts = [];
