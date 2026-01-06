import { c as create_ssr_component, a as validate_component, j as createEventDispatcher, e as escape, d as add_attribute, b as each } from "./ssr.js";
import { X } from "./x.js";
import { I as Icon } from "./Icon.js";
import { S as Save } from "./save.js";
const Link_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M9 17H7A5 5 0 0 1 7 7h2" }],
    ["path", { "d": "M15 7h2a5 5 0 1 1 0 10h-2" }],
    [
      "line",
      {
        "x1": "8",
        "x2": "16",
        "y1": "12",
        "y2": "12"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "link-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Upload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    ],
    ["polyline", { "points": "17 8 12 3 7 8" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "3",
        "y2": "15"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "upload" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ImageUploader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { imageUrl = "" } = $$props;
  let { label = "Imagen" } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let uploading = false;
  let preview = imageUrl;
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl !== void 0) $$bindings.imageUrl(imageUrl);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  {
    if (imageUrl && imageUrl !== preview) {
      preview = imageUrl;
    }
  }
  return `   <div class="space-y-3"><label class="block text-sm font-medium text-gray-700">${escape(label)} ${required ? `<span class="text-red-500" data-svelte-h="svelte-1n3raya">*</span>` : ``}</label>  ${preview ? `<div class="relative inline-block"><img${add_attribute("src", preview, 0)} alt="Preview" class="h-48 w-48 object-cover rounded-lg border-2 border-gray-200 shadow-sm"> ${!disabled ? `<button type="button" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 shadow-lg transition-colors" title="Eliminar imagen">${validate_component(X, "X").$$render($$result, { class: "w-4 h-4" }, {}, {})}</button>` : ``} ${``}</div>` : `<div class="space-y-2"> <div class="flex gap-2"><button type="button" ${disabled || uploading ? "disabled" : ""} class="flex-1 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"><div class="flex flex-col items-center text-gray-600">${`${validate_component(Upload, "Upload").$$render($$result, { class: "w-8 h-8 mb-2" }, {}, {})} <span class="text-sm font-medium" data-svelte-h="svelte-1xahvt2">Subir imagen</span> <span class="text-xs text-gray-500 mt-1" data-svelte-h="svelte-1g9yfot">JPG, PNG, GIF hasta 10MB</span>`}</div></button> <button type="button" ${disabled ? "disabled" : ""} class="px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors disabled:opacity-50" title="Usar URL">${validate_component(Link_2, "Link2").$$render($$result, { class: "w-6 h-6 text-gray-600" }, {}, {})}</button></div>  ${``}  <input type="file" accept="image/jpeg,image/jpg,image/png,image/gif,image/webp" ${disabled ? "disabled" : ""} class="hidden"></div>`}  ${``}  <p class="text-xs text-gray-500" data-svelte-h="svelte-1x5zc29">Recomendado: 800x600px o superior, formato JPG o PNG</p></div>`;
});
const ProductForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nombreValido;
  let precioValido;
  let categoriaValida;
  let formularioValido;
  let isDisabled;
  createEventDispatcher();
  let { producto = null } = $$props;
  let { categorias = [] } = $$props;
  let { marcas = [] } = $$props;
  let { disabled = false } = $$props;
  let loading = false;
  let formData = {
    nombre: "",
    descripcion_corta: "",
    precio: "",
    precio_oferta: "",
    stock: "",
    categoria_id: null,
    imagen_url: "",
    destacado: false,
    activo: true
  };
  if ($$props.producto === void 0 && $$bindings.producto && producto !== void 0) $$bindings.producto(producto);
  if ($$props.categorias === void 0 && $$bindings.categorias && categorias !== void 0) $$bindings.categorias(categorias);
  if ($$props.marcas === void 0 && $$bindings.marcas && marcas !== void 0) $$bindings.marcas(marcas);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    nombreValido = formData.nombre.trim().length > 0;
    precioValido = formData.precio;
    categoriaValida = formData.categoria_id !== null;
    formularioValido = nombreValido && precioValido && categoriaValida;
    isDisabled = disabled || loading;
    $$rendered = `  <form class="space-y-6"> ${``} ${``} <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="md:col-span-2"><label for="nombre" class="label">Nombre del Producto <span class="text-red-500" data-svelte-h="svelte-1n3raya">*</span></label> <input id="nombre" type="text" ${isDisabled ? "disabled" : ""} class="${[
      "input",
      !nombreValido && formData.nombre.length > 0 ? "border-red-500" : ""
    ].join(" ").trim()}" placeholder="Ej: Laptop Gamer Pro" required${add_attribute("value", formData.nombre, 0)}> ${!nombreValido && formData.nombre.length > 0 ? `<p class="mt-1 text-sm text-red-600" data-svelte-h="svelte-arhcll">El nombre es obligatorio</p>` : ``}</div>  <div><label for="categoria" class="label">Categoría <span class="text-red-500" data-svelte-h="svelte-1n3raya">*</span></label> ${`<select id="categoria"${add_attribute("value", "", 0)} ${isDisabled ? "disabled" : ""} class="${["input", !categoriaValida ? "border-red-500" : ""].join(" ").trim()}" required><option value="" data-svelte-h="svelte-4rs3l9">Seleccionar categoría</option>${each(categorias, (cat) => {
      return `<option${add_attribute("value", cat.id, 0)}>${escape(cat.nombre)}</option>`;
    })}</select> ${!categoriaValida && formData.nombre.length > 0 ? `<p class="mt-1 text-sm text-red-600" data-svelte-h="svelte-1912p6h">Debe seleccionar una categoría</p>` : ``} ${categorias.length === 0 ? `<p class="mt-1 text-sm text-amber-600">No hay categorías. <a href="/categorias" class="underline" data-svelte-h="svelte-14pibit">Crear una</a></p>` : ``}`}</div>  <div><label for="marca" class="label" data-svelte-h="svelte-1980mpp">Marca</label> ${`<select id="marca"${add_attribute("value", "", 0)} ${isDisabled ? "disabled" : ""} class="input"><option value="" data-svelte-h="svelte-107f01m">Sin marca</option>${each(marcas, (marca) => {
      return `<option${add_attribute("value", marca.id, 0)}>${escape(marca.nombre)}</option>`;
    })}</select> ${marcas.length === 0 ? `<p class="mt-1 text-sm text-gray-500">Opcional. <a href="/marcas/nuevo" class="text-primary-600 underline" data-svelte-h="svelte-1rgbmfj">Crear marca</a></p>` : ``}`}</div>  <div><label for="precio" class="label">Precio <span class="text-red-500" data-svelte-h="svelte-1n3raya">*</span></label> <div class="relative"><span class="absolute left-3 top-2.5 text-gray-500" data-svelte-h="svelte-1ytna31">$</span> <input id="precio" type="number" step="0.01" min="0" ${isDisabled ? "disabled" : ""} class="${[
      "input pl-8",
      ""
    ].join(" ").trim()}" placeholder="0.00" required${add_attribute("value", formData.precio, 0)}></div> ${``}</div>  <div><label for="precio_oferta" class="label" data-svelte-h="svelte-1n7tpi5">Precio de Oferta</label> <div class="relative"><span class="absolute left-3 top-2.5 text-gray-500" data-svelte-h="svelte-1ytna31">$</span> <input id="precio_oferta" type="number" step="0.01" min="0" ${isDisabled ? "disabled" : ""} class="input pl-8" placeholder="0.00"${add_attribute("value", formData.precio_oferta, 0)}></div> <p class="mt-1 text-xs text-gray-500" data-svelte-h="svelte-1e60zvr">Opcional: precio con descuento</p></div>  <div><label for="stock" class="label" data-svelte-h="svelte-1fw3joh">Stock</label> <input id="stock" type="number" min="0" ${isDisabled ? "disabled" : ""} class="input" placeholder="Dejar vacío si no aplica"${add_attribute("value", formData.stock, 0)}> <p class="mt-1 text-xs text-gray-500" data-svelte-h="svelte-rc5706">Opcional: cantidad disponible</p></div>  <div class="md:col-span-2">${validate_component(ImageUploader, "ImageUploader").$$render(
      $$result,
      {
        label: "Imagen del Producto",
        disabled: isDisabled,
        imageUrl: formData.imagen_url
      },
      {
        imageUrl: ($$value) => {
          formData.imagen_url = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>  <div class="md:col-span-2"><label for="descripcion_corta" class="label" data-svelte-h="svelte-al20oo">Descripción Corta</label> <input id="descripcion_corta" type="text" ${isDisabled ? "disabled" : ""} class="input" placeholder="Breve descripción del producto (se muestra en listados)" maxlength="200"${add_attribute("value", formData.descripcion_corta, 0)}> <p class="mt-1 text-xs text-gray-500" data-svelte-h="svelte-315ai">Máximo 200 caracteres</p></div>  <div class="md:col-span-2"><label for="descripcion_larga" class="label" data-svelte-h="svelte-1enyval">Descripción Detallada</label> <textarea id="descripcion_larga" ${isDisabled ? "disabled" : ""} rows="4" class="input resize-none" placeholder="Descripción completa del producto con todos los detalles...">${escape("")}</textarea></div>  <div class="md:col-span-2 flex flex-wrap gap-6"><label class="flex items-center cursor-pointer"><input type="checkbox" ${isDisabled ? "disabled" : ""} class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"${add_attribute("checked", formData.destacado, 1)}> <span class="ml-2 text-sm text-gray-700 font-medium" data-svelte-h="svelte-ztmx5h">⭐ Producto destacado</span></label> <label class="flex items-center cursor-pointer"><input type="checkbox" ${isDisabled ? "disabled" : ""} class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"${add_attribute("checked", formData.activo, 1)}> <span class="ml-2 text-sm text-gray-700 font-medium" data-svelte-h="svelte-1hdeuox">Producto activo (visible en catálogo)</span></label></div></div>  <div class="flex flex-col-reverse sm:flex-row gap-3 pt-6 border-t border-gray-200"><button type="button" ${isDisabled ? "disabled" : ""} class="btn-secondary w-full sm:w-auto">${validate_component(X, "X").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
      Cancelar</button> <button type="submit" ${!formularioValido || isDisabled ? "disabled" : ""} class="btn-primary w-full sm:flex-1 flex items-center justify-center">${`${validate_component(Save, "Save").$$render($$result, { class: "w-5 h-5 mr-2" }, {}, {})} ${escape(producto ? "Actualizar Producto" : "Crear Producto")}`}</button></div>  ${!formularioValido ? `<div class="bg-amber-50 border border-amber-200 rounded-lg p-4"><p class="text-sm text-amber-800 font-medium mb-2" data-svelte-h="svelte-hvd1zz">⚠️ Completa los campos obligatorios:</p> <ul class="text-sm text-amber-700 space-y-1 ml-4">${!nombreValido ? `<li data-svelte-h="svelte-17d2gsc">• Nombre del producto</li>` : ``} ${!precioValido ? `<li data-svelte-h="svelte-1abj5gn">• Precio válido</li>` : ``} ${!categoriaValida ? `<li data-svelte-h="svelte-klwvux">• Categoría</li>` : ``}</ul></div>` : ``}</form>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  ProductForm as P
};
