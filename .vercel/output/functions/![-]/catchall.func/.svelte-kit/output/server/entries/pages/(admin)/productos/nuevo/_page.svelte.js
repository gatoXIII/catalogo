import { c as create_ssr_component, a as validate_component } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
import { P as ProductForm } from "../../../../../chunks/ProductForm.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  ${$$result.head += `<!-- HEAD_svelte-197lhl2_START -->${$$result.title = `<title>Nuevo Producto | Dashboard</title>`, ""}<!-- HEAD_svelte-197lhl2_END -->`, ""} <div class="max-w-4xl mx-auto"> <nav class="mb-6 flex items-center text-sm text-gray-600"><a href="/productos" class="hover:text-primary-600" data-svelte-h="svelte-sldmz7">Productos</a> <svg class="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> <span class="text-gray-900 font-medium" data-svelte-h="svelte-1vho0ko">Nuevo Producto</span></nav>  <div class="mb-8"><h1 class="text-2xl md:text-3xl font-bold text-gray-900" data-svelte-h="svelte-1eged9v">Crear Nuevo Producto</h1> <p class="mt-1 text-sm text-gray-600" data-svelte-h="svelte-uyrix8">Completa la información del producto</p></div>  <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">${validate_component(ProductForm, "ProductForm").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
