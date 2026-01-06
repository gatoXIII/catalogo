import * as server from '../entries/pages/(admin)/dashboard/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(admin)/dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(admin)/dashboard/+page.server.js";
export const imports = ["_app/immutable/nodes/6.DEUR1KMH.js","_app/immutable/chunks/VwrJ_jBZ.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/ClsFpFEz.js"];
export const stylesheets = [];
export const fonts = [];
