import * as server from '../entries/pages/(admin)/productos/_page.server.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(admin)/productos/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(admin)/productos/+page.server.js";
export const imports = ["_app/immutable/nodes/12.CWIh9Ovu.js","_app/immutable/chunks/VwrJ_jBZ.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/ClsFpFEz.js","_app/immutable/chunks/6uIGZX0H.js","_app/immutable/chunks/BWp1LszE.js"];
export const stylesheets = [];
export const fonts = [];
