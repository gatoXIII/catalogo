import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `   ${$$result.head += `<!-- HEAD_svelte-17noznw_START -->${$$result.title = `<title>Dashboard | Mi Tienda</title>`, ""}<!-- HEAD_svelte-17noznw_END -->`, ""} <div class="max-w-7xl mx-auto"> <div class="mb-8"><h1 class="text-2xl md:text-3xl font-bold text-gray-900" data-svelte-h="svelte-13vjfnd">Dashboard</h1> <p class="mt-1 text-sm text-gray-600" data-svelte-h="svelte-10uqkou">Resumen general de tu tienda</p></div> ${``} ${`<div class="flex items-center justify-center py-12"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>`}</div>`;
});
export {
  Page as default
};
