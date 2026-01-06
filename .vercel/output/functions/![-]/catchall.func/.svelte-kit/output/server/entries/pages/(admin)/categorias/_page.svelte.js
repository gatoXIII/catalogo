import { c as create_ssr_component, a as validate_component } from "../../../../chunks/ssr.js";
import { P as Plus } from "../../../../chunks/plus.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `   <div class="space-y-6">${``} <div class="flex justify-between items-center"><div><h1 class="text-2xl font-bold text-gray-800" data-svelte-h="svelte-qn6cvc">Gestión de Categorías</h1> <p class="text-gray-600" data-svelte-h="svelte-cjgj4o">Organiza tus productos por categorías</p></div> ${`<button class="btn-primary flex items-center gap-2">${validate_component(Plus, "Plus").$$render($$result, { class: "w-5 h-5" }, {}, {})}
        Nueva Categoría</button>`}</div> ${`<div class="bg-white rounded-xl shadow-sm p-6">${`<div class="text-center py-12"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div> <p class="mt-4 text-gray-600" data-svelte-h="svelte-6tuw1k">Cargando categorías...</p></div>`}</div>`}</div>`;
});
export {
  Page as default
};
