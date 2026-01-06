import { c as create_ssr_component, a as validate_component, d as add_attribute, e as escape, v as validate_store, s as subscribe, b as each } from "../../../chunks/ssr.js";
import { c as carrito, a as carritoVacio, S as Shopping_cart } from "../../../chunks/carritoStore.js";
import { P as Package } from "../../../chunks/package.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { P as Plus } from "../../../chunks/plus.js";
import "../../../chunks/client.js";
import { M as Message_circle } from "../../../chunks/message-circle.js";
const Arrow_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m12 19-7-7 7-7" }], ["path", { "d": "M19 12H5" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Circle_check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "m9 12 2 2 4-4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "circle-check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Minus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "minus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Trash_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    [
      "path",
      {
        "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
      }
    ],
    [
      "path",
      {
        "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
      }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "10",
        "y1": "11",
        "y2": "17"
      }
    ],
    [
      "line",
      {
        "x1": "14",
        "x2": "14",
        "y1": "11",
        "y2": "17"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "trash-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CartItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let subtotalItem;
  let tieneDescuento;
  let ahorroTotal;
  let { item } = $$props;
  let { disabled = false } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  subtotalItem = item.precio_unitario * item.cantidad;
  tieneDescuento = item.precio_original && item.precio_unitario < item.precio_original;
  ahorroTotal = tieneDescuento ? (item.precio_original - item.precio_unitario) * item.cantidad : 0;
  return `  <div class="${"flex items-center px-6 py-4 hover:bg-gray-50 transition-colors " + escape(disabled ? "opacity-60" : "", true)}"> <div class="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden mr-4">${item.imagen_url ? `<img${add_attribute("src", item.imagen_url, 0)}${add_attribute("alt", item.nombre, 0)} class="w-full h-full object-cover" loading="lazy">` : `<div class="w-full h-full flex items-center justify-center">${validate_component(Package, "Package").$$render($$result, { class: "w-8 h-8 text-gray-400" }, {}, {})}</div>`}</div>  <div class="flex-grow"><div class="flex justify-between"><div><h3 class="font-medium text-gray-800">${escape(item.nombre)}</h3>  <div class="flex items-center gap-2 mt-1">${item.marca ? `<p class="text-xs text-gray-500">${escape(item.marca)}</p>` : ``} ${item.categoria && item.marca ? `<span class="text-gray-300" data-svelte-h="svelte-sg33ca">•</span>` : ``} ${item.categoria ? `<p class="text-xs text-gray-500">${escape(item.categoria)}</p>` : ``}</div>  <div class="mt-1"><span class="text-primary-600 font-bold">$${escape(item.precio_unitario.toFixed(2))}</span> ${tieneDescuento ? `<span class="text-xs text-gray-500 line-through ml-2">$${escape(item.precio_original.toFixed(2))}</span>` : ``} <span class="text-xs text-gray-500" data-svelte-h="svelte-exf6z4">c/u</span></div>  ${item.sku ? `<p class="text-xs text-gray-400 mt-1">SKU: ${escape(item.sku)}</p>` : ``}</div> <div class="text-right"><p class="text-lg font-bold text-gray-800">$${escape(subtotalItem.toFixed(2))}</p> ${item.cantidad > 1 ? `<p class="text-sm text-gray-500">${escape(item.cantidad)} × $${escape(item.precio_unitario.toFixed(2))}</p>` : ``} ${tieneDescuento ? `<p class="text-xs text-green-600 font-medium mt-1">Ahorras $${escape(ahorroTotal.toFixed(2))}</p>` : ``}</div></div>  <div class="flex items-center justify-between mt-3"><div class="flex items-center space-x-2"><button ${disabled || item.cantidad <= 1 ? "disabled" : ""} class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" title="Disminuir cantidad">${validate_component(Minus, "Minus").$$render($$result, { class: "w-4 h-4" }, {}, {})}</button> <span class="w-12 text-center font-medium">${escape(item.cantidad)}</span> <button ${disabled || item.stock && item.cantidad >= item.stock ? "disabled" : ""} class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"${add_attribute(
    "title",
    item.stock && item.cantidad >= item.stock ? `Stock máximo: ${item.stock}` : "Aumentar cantidad",
    0
  )}>${validate_component(Plus, "Plus").$$render($$result, { class: "w-4 h-4" }, {}, {})}</button>  ${item.stock ? `<span class="text-xs text-gray-500 ml-2">${item.cantidad >= item.stock ? `<span class="text-amber-600" data-svelte-h="svelte-1s41enh">Máximo disponible</span>` : `<span>${escape(item.stock - item.cantidad)} disponibles</span>`}</span>` : ``}</div> <button ${disabled ? "disabled" : ""} class="text-red-600 hover:text-red-800 flex items-center text-sm disabled:opacity-50 transition-colors" title="Eliminar del carrito">${validate_component(Trash_2, "Trash2").$$render($$result, { class: "w-4 h-4 mr-1" }, {}, {})}
        Eliminar</button></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let configuracion;
  let subtotal;
  let impuestoPorcentaje;
  let impuesto;
  let total;
  let formularioValido;
  let $carrito, $$unsubscribe_carrito;
  let $carritoVacio, $$unsubscribe_carritoVacio;
  validate_store(carrito, "carrito");
  $$unsubscribe_carrito = subscribe(carrito, (value) => $carrito = value);
  validate_store(carritoVacio, "carritoVacio");
  $$unsubscribe_carritoVacio = subscribe(carritoVacio, (value) => $carritoVacio = value);
  let { data } = $$props;
  let datosCliente = {
    nombre: "",
    whatsapp: "",
    email: "",
    direccion: ""
  };
  let enviandoPedido = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  configuracion = data.configuracion;
  subtotal = $carrito.reduce((total2, item) => total2 + item.precio_unitario * item.cantidad, 0);
  impuestoPorcentaje = (configuracion?.impuesto_porcentaje || 18) / 100;
  impuesto = subtotal * impuestoPorcentaje;
  total = subtotal + impuesto;
  formularioValido = datosCliente.nombre.trim() !== "" && datosCliente.whatsapp.trim() !== "";
  $$unsubscribe_carrito();
  $$unsubscribe_carritoVacio();
  return `  ${$$result.head += `<!-- HEAD_svelte-zxsald_START -->${$$result.title = `<title>Mi Carrito - ${escape(configuracion?.nombre_empresa || "CatálogoExpress")}</title>`, ""}<!-- HEAD_svelte-zxsald_END -->`, ""} <div class="max-w-6xl mx-auto"> <div class="mb-8"><a href="/" class="inline-flex items-center text-primary-600 hover:text-primary-800 mb-4 transition-colors">${validate_component(Arrow_left, "ArrowLeft").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
      Volver al catálogo</a> <h1 class="text-3xl font-bold text-gray-800" data-svelte-h="svelte-2eo2kt">Mi Carrito</h1> <p class="text-gray-600 mt-2" data-svelte-h="svelte-8swj9h">Revisa tu pedido y envíalo por WhatsApp</p></div> ${`${$carritoVacio ? ` <div class="text-center py-16 bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-300"><div class="max-w-md mx-auto"><div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">${validate_component(Shopping_cart, "ShoppingCart").$$render($$result, { class: "w-12 h-12 text-gray-400" }, {}, {})}</div> <h3 class="text-xl font-semibold text-gray-700 mb-2" data-svelte-h="svelte-1dmo387">Tu carrito está vacío</h3> <p class="text-gray-500 mb-6" data-svelte-h="svelte-5wxn8q">Añade productos desde el catálogo para comenzar tu pedido</p> <a href="/" class="btn-primary inline-flex items-center">${validate_component(Shopping_cart, "ShoppingCart").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
          Ver catálogo</a></div></div>` : `<div class="flex flex-col lg:flex-row gap-8"> <div class="lg:w-2/3"><div class="bg-white rounded-xl shadow-sm overflow-hidden"> <div class="bg-gray-50 px-6 py-4 border-b border-gray-200"><div class="flex justify-between items-center"><h2 class="font-semibold text-gray-700">Productos (${escape($carrito.reduce((total2, item) => total2 + item.cantidad, 0))} items)</h2> <button class="text-sm text-red-600 hover:text-red-800 flex items-center transition-colors" ${""}>${validate_component(Trash_2, "Trash2").$$render($$result, { class: "w-4 h-4 mr-1" }, {}, {})}
                Vaciar carrito</button></div></div>  <div class="divide-y divide-gray-100">${each($carrito, (item) => {
    return `${validate_component(CartItem, "CartItem").$$render($$result, { item, disabled: enviandoPedido }, {}, {})}`;
  })}</div>  <div class="p-6 border-t border-gray-200 bg-gray-50"><h3 class="font-medium text-gray-700 mb-4" data-svelte-h="svelte-dp8rcm">Información de contacto</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label class="label">Tu nombre <span class="text-red-500" data-svelte-h="svelte-1n3raya">*</span></label> <input type="text" placeholder="Ej: Juan Pérez" class="input" ${""} required${add_attribute("value", datosCliente.nombre, 0)}></div> <div><label class="label">Tu WhatsApp <span class="text-red-500" data-svelte-h="svelte-1n3raya">*</span></label> <input type="tel" placeholder="Ej: 7121920418" class="input" ${""} required${add_attribute("value", datosCliente.whatsapp, 0)}></div> <div><label class="label" data-svelte-h="svelte-11aqzbg">Tu email (opcional)</label> <input type="email" placeholder="Ej: correo@ejemplo.com" class="input" ${""}${add_attribute("value", datosCliente.email, 0)}></div> <div><label class="label" data-svelte-h="svelte-1rg10gj">Dirección (opcional)</label> <input type="text" placeholder="Ej: Calle Principal 123" class="input" ${""}${add_attribute("value", datosCliente.direccion, 0)}></div> <div class="md:col-span-2"><label class="label" data-svelte-h="svelte-2bqgu0">Notas adicionales (opcional)</label> <textarea placeholder="¿Alguna indicación especial?" rows="2" class="input resize-none" ${""}>${escape("")}</textarea></div></div></div></div></div>  <div class="lg:w-1/3"><div class="bg-white rounded-xl shadow-sm p-6 sticky top-24"><h2 class="text-xl font-bold text-gray-800 mb-6" data-svelte-h="svelte-1nx76o9">Resumen del Pedido</h2>  <div class="space-y-4 mb-6"><div class="flex justify-between text-gray-600"><span>Subtotal (${escape($carrito.length)} productos)</span> <span class="font-medium">${escape(configuracion.moneda_simbolo)}${escape(subtotal.toFixed(2))}</span></div> <div class="flex justify-between text-gray-600"><span>Impuestos (${escape(configuracion.impuesto_porcentaje)}%)</span> <span class="font-medium">${escape(configuracion.moneda_simbolo)}${escape(impuesto.toFixed(2))}</span></div> <div class="border-t border-gray-200 pt-4"><div class="flex justify-between text-lg font-bold"><span data-svelte-h="svelte-2fqrek">Total</span> <span class="text-primary-700">${escape(configuracion.moneda_simbolo)}${escape(total.toFixed(2))}</span></div></div></div>  ${``}  <button ${!formularioValido || enviandoPedido ? "disabled" : ""} class="w-full btn-primary flex items-center justify-center gap-2 mb-4 disabled:opacity-50 disabled:cursor-not-allowed">${`${validate_component(Message_circle, "MessageCircle").$$render($$result, { class: "w-5 h-5" }, {}, {})}
              Crear y enviar por WhatsApp`}</button> ${!formularioValido ? `<p class="text-xs text-amber-600 text-center mb-4" data-svelte-h="svelte-1yaqqcw">* Completa tu nombre y WhatsApp para continuar</p>` : ``}  <div class="text-sm text-gray-500 border-t border-gray-100 pt-4 space-y-2"><p class="font-medium text-gray-700" data-svelte-h="svelte-1fy7crw">¿Cómo funciona?</p> <ol class="list-decimal pl-4 space-y-1"><li data-svelte-h="svelte-vz2cm0">Tu pedido se guardará en nuestro sistema</li> <li data-svelte-h="svelte-18um5w6">Se abrirá WhatsApp con tu pedido listo</li> <li data-svelte-h="svelte-17wqqwe">Envía el mensaje y te contactaremos</li> <li data-svelte-h="svelte-1o03w6d">Coordinaremos pago y entrega</li></ol></div>  <div class="mt-4 pt-4 border-t border-gray-100"><div class="flex items-center gap-2 text-xs text-gray-500">${validate_component(Circle_check, "CheckCircle2").$$render($$result, { class: "w-4 h-4 text-green-500" }, {}, {})} <span data-svelte-h="svelte-3ftcyi">Pedido seguro • Sin cargos automáticos</span></div></div></div></div></div>`}`}</div>`;
});
export {
  Page as default
};
