import * as server from '../entries/pages/carrito/_page.server.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/carrito/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/carrito/+page.server.js";
export const imports = ["_app/immutable/nodes/16.CbAkD9WB.js","_app/immutable/chunks/VwrJ_jBZ.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/ClsFpFEz.js","_app/immutable/chunks/D8kohgm3.js","_app/immutable/chunks/CQkGnOqn.js","_app/immutable/chunks/BWp1LszE.js","_app/immutable/chunks/Dh4o2pt7.js","_app/immutable/chunks/B2qUbE6W.js","_app/immutable/chunks/BkxXHVm6.js","_app/immutable/chunks/6uIGZX0H.js","_app/immutable/chunks/v0fJu9_I.js","_app/immutable/chunks/jd2_iQiR.js","_app/immutable/chunks/psudU1-9.js"];
export const stylesheets = [];
export const fonts = [];
