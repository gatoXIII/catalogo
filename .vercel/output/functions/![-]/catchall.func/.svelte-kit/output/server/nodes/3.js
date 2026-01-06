import * as server from '../entries/pages/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.D2N-y3oR.js","_app/immutable/chunks/VwrJ_jBZ.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/ClsFpFEz.js","_app/immutable/chunks/D8kohgm3.js","_app/immutable/chunks/CQkGnOqn.js","_app/immutable/chunks/BWp1LszE.js","_app/immutable/chunks/BkxXHVm6.js","_app/immutable/chunks/psudU1-9.js","_app/immutable/chunks/B4QJF5bk.js"];
export const stylesheets = ["_app/immutable/assets/3.r0yjbgpy.css"];
export const fonts = [];
