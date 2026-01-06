import { c as create_ssr_component, a as validate_component, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { S as Store } from "../../../../chunks/store.js";
import { I as Icon } from "../../../../chunks/Icon.js";
const Lock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "11",
        "x": "3",
        "y": "11",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M7 11V7a5 5 0 0 1 10 0v4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "lock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "12", "cy": "7", "r": "4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "user" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  return `  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4"><div class="w-full max-w-md"> <div class="bg-white rounded-2xl shadow-xl p-8"> <div class="text-center mb-8"><div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">${validate_component(Store, "Store").$$render($$result, { class: "w-8 h-8 text-primary-600" }, {}, {})}</div> <h1 class="text-2xl font-bold text-gray-800" data-svelte-h="svelte-zttnk">Panel de Administración</h1> <p class="text-gray-600 mt-2" data-svelte-h="svelte-hd0ftd">Ingresa tus credenciales para continuar</p></div>  <form method="POST"> ${form?.error ? `<div class="mb-6 p-3 bg-red-50 border border-red-100 rounded-lg"><div class="flex items-center"><div class="flex-shrink-0"><svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg></div> <div class="ml-3"><p class="text-sm text-red-700">${escape(form.error)}</p></div></div></div>` : ``}  <div class="mb-6"><label class="label flex items-center">${validate_component(User, "User").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
            Usuario</label> <div class="relative"><input type="text" name="username"${add_attribute("value", form?.username ?? "", 0)} placeholder="admin" required class="input pl-10" ${""}> ${validate_component(User, "User").$$render(
    $$result,
    {
      class: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
    },
    {},
    {}
  )}</div></div>  <div class="mb-8"><label class="label flex items-center">${validate_component(Lock, "Lock").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
            Contraseña</label> <div class="relative"><input type="password" name="password" placeholder="••••••••" required class="input pl-10" ${""}> ${validate_component(Lock, "Lock").$$render(
    $$result,
    {
      class: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
    },
    {},
    {}
  )}</div></div>  <button type="submit" class="w-full btn-primary flex items-center justify-center" ${""}>${`Iniciar Sesión`}</button></form>  <div class="mt-8 pt-6 border-t border-gray-100"><p class="text-sm text-gray-600 text-center"><strong data-svelte-h="svelte-174c17v">Credenciales de demostración:</strong><br>
          Usuario: <code class="bg-gray-100 px-2 py-1 rounded" data-svelte-h="svelte-1d77q26">admin</code><br>
          Contraseña: <code class="bg-gray-100 px-2 py-1 rounded" data-svelte-h="svelte-oembw8">admin123</code></p></div></div>  <div class="text-center mt-6"><a href="/" class="text-sm text-gray-500 hover:text-gray-700" data-svelte-h="svelte-17swun0">← Volver al catálogo público</a></div></div></div>`;
});
export {
  Page as default
};
