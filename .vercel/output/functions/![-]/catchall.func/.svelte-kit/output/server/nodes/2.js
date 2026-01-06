import * as server from '../entries/pages/(admin)/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(admin)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(admin)/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.DRr3vkXn.js","_app/immutable/chunks/VwrJ_jBZ.js","_app/immutable/chunks/ClsFpFEz.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/6uIGZX0H.js","_app/immutable/chunks/BWp1LszE.js","_app/immutable/chunks/CRNa9Vnm.js","_app/immutable/chunks/CJuQcbGA.js","_app/immutable/chunks/CQkGnOqn.js","_app/immutable/chunks/B2qUbE6W.js","_app/immutable/chunks/B4QJF5bk.js","_app/immutable/chunks/psudU1-9.js","_app/immutable/chunks/BRILZmCl.js","_app/immutable/chunks/CLRgUYaD.js","_app/immutable/chunks/BBxw4Vio.js"];
export const stylesheets = [];
export const fonts = [];
