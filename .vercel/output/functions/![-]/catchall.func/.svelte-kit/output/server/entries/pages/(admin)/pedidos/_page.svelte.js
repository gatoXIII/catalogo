import { c as create_ssr_component, b as each, d as add_attribute, e as escape } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pedidosFiltrados;
  let pedidos = [];
  let filterEstado = "";
  let searchTerm = "";
  const estados = [
    {
      value: "pendiente",
      label: "Pendiente",
      color: "yellow"
    },
    {
      value: "confirmado",
      label: "Confirmado",
      color: "blue"
    },
    {
      value: "enviado",
      label: "Enviado",
      color: "purple"
    },
    {
      value: "entregado",
      label: "Entregado",
      color: "green"
    },
    {
      value: "cancelado",
      label: "Cancelado",
      color: "red"
    }
  ];
  pedidosFiltrados = pedidos.filter((p) => {
    let matches = true;
    return matches;
  });
  return `  ${$$result.head += `<!-- HEAD_svelte-zdbpsj_START -->${$$result.title = `<title>Pedidos | Dashboard</title>`, ""}<!-- HEAD_svelte-zdbpsj_END -->`, ""} <div class="max-w-7xl mx-auto"> <div class="mb-6"><h1 class="text-2xl md:text-3xl font-bold text-gray-900" data-svelte-h="svelte-udvyqb">Pedidos</h1> <p class="mt-1 text-sm text-gray-600" data-svelte-h="svelte-1yfoeem">Gestiona todos los pedidos de tu tienda</p></div>  ${``} ${``}  <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">${each(estados, (estado) => {
    let count = pedidos.filter((p) => p.estado === estado.value).length;
    return ` <button class="${"bg-white rounded-lg shadow-sm border-2 p-4 text-center transition-all hover:shadow-md " + escape(
      filterEstado === estado.value ? `border-${estado.color}-500` : "border-gray-200",
      true
    )}"><div class="text-2xl font-bold text-gray-900">${escape(count)}</div> <div class="text-xs text-gray-600 mt-1">${escape(estado.label)}</div> </button>`;
  })}</div>  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div class="md:col-span-2"><label for="search" class="block text-sm font-medium text-gray-700 mb-1" data-svelte-h="svelte-1oiz0q4">Buscar pedido</label> <div class="relative"><input id="search" type="text" placeholder="Cliente, teléfono o #pedido..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"${add_attribute("value", searchTerm, 0)}> <svg class="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></div>  <div><label for="estado" class="block text-sm font-medium text-gray-700 mb-1" data-svelte-h="svelte-1v5dj9z">Estado</label> <select id="estado" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"><option value="" data-svelte-h="svelte-3662q4">Todos los estados</option>${each(estados, (estado) => {
    return `<option${add_attribute("value", estado.value, 0)}>${escape(estado.label)}</option>`;
  })}</select></div></div> <div class="mt-4 flex items-center justify-between"><p class="text-sm text-gray-600">Mostrando ${escape(pedidosFiltrados.length)} de ${escape(pedidos.length)} pedidos</p> ${``}</div></div> ${`<div class="flex items-center justify-center py-12"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>`}</div>  ${``}`;
});
export {
  Page as default
};
