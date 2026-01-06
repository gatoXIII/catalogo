import * as server from '../entries/pages/(admin)/marcas/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(admin)/marcas/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(admin)/marcas/+page.server.js";
export const imports = ["_app/immutable/nodes/7.BPlEprBb.js","_app/immutable/chunks/VwrJ_jBZ.js","_app/immutable/chunks/D0QH3NT1.js","_app/immutable/chunks/ClsFpFEz.js","_app/immutable/chunks/CAqCW1Qx.js","_app/immutable/chunks/CQkGnOqn.js","_app/immutable/chunks/v0fJu9_I.js","_app/immutable/chunks/CLRgUYaD.js","_app/immutable/chunks/Dd2nhuDv.js","_app/immutable/chunks/B2qUbE6W.js","_app/immutable/chunks/jd2_iQiR.js","_app/immutable/chunks/Dh4o2pt7.js","_app/immutable/chunks/9uylGhct.js","_app/immutable/chunks/B4QJF5bk.js"];
export const stylesheets = ["_app/immutable/assets/7.uyw-U0jT.css"];
export const fonts = [];
