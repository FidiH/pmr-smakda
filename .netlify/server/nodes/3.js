

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pendaftaran-pmr/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.35b31d0e.js","_app/immutable/chunks/index.5771b8a3.js"];
export const stylesheets = ["_app/immutable/assets/3.ad273c96.css"];
export const fonts = [];
