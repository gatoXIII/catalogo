import { c as create_ssr_component, a as validate_component, b as each, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
import { M as Message_circle } from "../../../../chunks/message-circle.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { S as Save } from "../../../../chunks/save.js";
const Copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "14",
        "height": "14",
        "x": "8",
        "y": "8",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "path",
      {
        "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "copy" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let plantillas = [
    {
      id: 1,
      nombre: "Confirmación de Pedido",
      texto: `*Nuevo Pedido Recibido*

Cliente: {{cliente_nombre}}
WhatsApp: {{cliente_whatsapp}}

Pedido:
{{lista_productos}}

Total: {{total}}

¡Gracias por tu compra!`
    },
    {
      id: 2,
      nombre: "Consulta por Producto",
      texto: `Hola, me interesa el producto:
*{{producto_nombre}}*

¿Podrías darme más información sobre disponibilidad y precio?`
    }
  ];
  let plantillaSeleccionada = plantillas[0];
  return `<div class="p-6"><div class="mb-8"><h1 class="text-2xl font-bold text-gray-800" data-svelte-h="svelte-1xo30tx">Plantillas de WhatsApp</h1> <p class="text-gray-600" data-svelte-h="svelte-kl6c6f">Configura los mensajes automáticos para pedidos y consultas</p></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"> <div class="lg:col-span-1"><div class="bg-white rounded-xl shadow-sm p-6"><h2 class="font-bold text-gray-800 mb-4" data-svelte-h="svelte-u16jp2">Plantillas disponibles</h2> <div class="space-y-2">${each(plantillas, (plantilla) => {
    return `<button${add_attribute(
      "class",
      `w-full text-left p-3 rounded-lg transition-colors ${plantillaSeleccionada.id === plantilla.id ? "bg-primary-50 border border-primary-200" : "hover:bg-gray-50 border border-transparent"}`,
      0
    )}><div class="flex items-center">${validate_component(Message_circle, "MessageCircle").$$render($$result, { class: "w-5 h-5 text-gray-400 mr-3" }, {}, {})} <div><p class="font-medium text-gray-800">${escape(plantilla.nombre)}</p> <p class="text-xs text-gray-500 truncate">${escape(plantilla.texto.substring(0, 50))}...</p> </div></div> </button>`;
  })}</div> <button class="w-full mt-4 btn-outline flex items-center justify-center">${validate_component(Message_circle, "MessageCircle").$$render($$result, { class: "w-5 h-5 mr-2" }, {}, {})}
          Nueva Plantilla</button></div></div>  <div class="lg:col-span-2"><div class="bg-white rounded-xl shadow-sm p-6"><div class="flex justify-between items-center mb-6"><h2 class="font-bold text-gray-800">${escape(plantillaSeleccionada.nombre)}</h2> <div class="flex space-x-2"><button class="btn-secondary flex items-center">${validate_component(Copy, "Copy").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
              Copiar</button> <button class="btn-primary flex items-center">${validate_component(Save, "Save").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
              Guardar</button></div></div> <div class="mb-6"><label class="label" data-svelte-h="svelte-h3tp9n">Nombre de la plantilla</label> <input type="text" class="input"${add_attribute("value", plantillaSeleccionada.nombre, 0)}></div> <div class="mb-6"><label class="label" data-svelte-h="svelte-6c104v">Texto del mensaje</label> <textarea rows="10" class="input resize-none">${escape(plantillaSeleccionada.texto || "")}</textarea></div>  <div class="bg-gray-50 rounded-lg p-4"><h3 class="font-medium text-gray-800 mb-3" data-svelte-h="svelte-1gy0bai">Variables disponibles</h3> <div class="grid grid-cols-2 md:grid-cols-3 gap-2"><code class="bg-white border border-gray-200 px-3 py-1 rounded text-sm">${escape("{{cliente_nombre}}")}</code> <code class="bg-white border border-gray-200 px-3 py-1 rounded text-sm">${escape("{{cliente_whatsapp}}")}</code> <code class="bg-white border border-gray-200 px-3 py-1 rounded text-sm">${escape("{{lista_productos}}")}</code> <code class="bg-white border border-gray-200 px-3 py-1 rounded text-sm">${escape("{{total}}")}</code> <code class="bg-white border border-gray-200 px-3 py-1 rounded text-sm">${escape("{{producto_nombre}}")}</code> <code class="bg-white border border-gray-200 px-3 py-1 rounded text-sm">${escape("{{producto_precio}}")}</code></div> <p class="text-sm text-gray-600 mt-3" data-svelte-h="svelte-ujo6qe">Usa estas variables en el texto y se reemplazarán automáticamente.</p></div></div></div></div></div>`;
});
export {
  Page as default
};
