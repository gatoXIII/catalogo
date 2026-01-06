import * as server from '../entries/pages/(admin)/marcas/_id_/editar/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(admin)/marcas/_id_/editar/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(admin)/marcas/[id]/editar/+page.server.js";
export const imports = ["_app/immutable/nodes/9.BuHcgg57.js","_app/immutable/chunks/VwrJ_jBZ.js","_app/immutable/chunks/ClsFpFEz.js"];
export const stylesheets = [];
export const fonts = [];
