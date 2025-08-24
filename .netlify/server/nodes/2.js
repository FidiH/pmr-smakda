

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.574faf6e.js","_app/immutable/chunks/index.5771b8a3.js"];
export const stylesheets = [];
export const fonts = [];
