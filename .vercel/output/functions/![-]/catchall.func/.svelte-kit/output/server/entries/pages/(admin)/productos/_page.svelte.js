import { c as create_ssr_component, d as add_attribute, b as each, e as escape } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let productosFiltrados;
  let productos = [];
  let categorias = [];
  let searchTerm = "";
  productosFiltrados = productos.filter((p) => {
    let matches = true;
    return matches;
  });
  return `  ${$$result.head += `<!-- HEAD_svelte-1cpytj4_START -->${$$result.title = `<title>Productos | Dashboard</title>`, ""}<!-- HEAD_svelte-1cpytj4_END -->`, ""} <div class="max-w-7xl mx-auto"> <div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div><h1 class="text-2xl md:text-3xl font-bold text-gray-900" data-svelte-h="svelte-lj40zw">Productos</h1> <p class="mt-1 text-sm text-gray-600" data-svelte-h="svelte-qah8b3">Gestiona tu catálogo de productos</p></div> <a href="/productos/nuevo" class="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
      Nuevo Producto</a></div>  ${``} ${``}  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> <div class="md:col-span-2"><label for="search" class="block text-sm font-medium text-gray-700 mb-1" data-svelte-h="svelte-17f65jb">Buscar</label> <div class="relative"><input id="search" type="text" placeholder="Nombre, descripción o SKU..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"${add_attribute("value", searchTerm, 0)}> <svg class="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></div>  <div><label for="categoria" class="block text-sm font-medium text-gray-700 mb-1" data-svelte-h="svelte-1qbo8yb">Categoría</label> <select id="categoria" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"><option value="" data-svelte-h="svelte-6o0elv">Todas</option>${each(categorias, (cat) => {
    return `<option${add_attribute("value", cat.id, 0)}>${escape(cat.nombre)}</option>`;
  })}</select></div>  <div><label for="activo" class="block text-sm font-medium text-gray-700 mb-1" data-svelte-h="svelte-qcn6jd">Estado</label> <select id="activo" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"><option value="" data-svelte-h="svelte-uh9n4x">Todos</option><option value="true" data-svelte-h="svelte-1oyzk9x">Activos</option><option value="false" data-svelte-h="svelte-n79c89">Inactivos</option></select></div></div>  <div class="mt-4 flex items-center justify-between"><div class="flex gap-2"><button class="${"p-2 rounded-lg transition-colors " + escape(
    "bg-indigo-100 text-indigo-600",
    true
  )}" title="Vista de tabla"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg></button> <button class="${"p-2 rounded-lg transition-colors " + escape(
    "bg-gray-100 text-gray-600 hover:bg-gray-200",
    true
  )}" title="Vista de cuadrícula"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg></button></div> <p class="text-sm text-gray-600">${escape(productosFiltrados.length)} producto${escape(productosFiltrados.length !== 1 ? "s" : "")}</p></div></div> ${`<div class="flex items-center justify-center py-12"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>`}</div>  ${``}`;
});
export {
  Page as default
};
