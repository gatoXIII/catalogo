import { c as create_ssr_component, a as validate_component, v as validate_store, s as subscribe, b as each, d as add_attribute, e as escape, m as missing_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { p as page } from "../../../chunks/stores.js";
import { a as auth } from "../../../chunks/authStore.js";
import { S as Store } from "../../../chunks/store.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { P as Package } from "../../../chunks/package.js";
import { T as Tag } from "../../../chunks/tag.js";
import { M as Message_circle } from "../../../chunks/message-circle.js";
import { S as Settings } from "../../../chunks/settings.js";
import { X } from "../../../chunks/x.js";
const Award = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
      }
    ],
    ["circle", { "cx": "12", "cy": "8", "r": "6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "award" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ],
    ["polyline", { "points": "9 22 9 12 15 12 15 22" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "home" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Layout_dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "7",
        "height": "9",
        "x": "3",
        "y": "3",
        "rx": "1"
      }
    ],
    [
      "rect",
      {
        "width": "7",
        "height": "5",
        "x": "14",
        "y": "3",
        "rx": "1"
      }
    ],
    [
      "rect",
      {
        "width": "7",
        "height": "9",
        "x": "14",
        "y": "12",
        "rx": "1"
      }
    ],
    [
      "rect",
      {
        "width": "7",
        "height": "5",
        "x": "3",
        "y": "16",
        "rx": "1"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "layout-dashboard" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Log_out = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
      }
    ],
    ["polyline", { "points": "16 17 21 12 16 7" }],
    [
      "line",
      {
        "x1": "21",
        "x2": "9",
        "y1": "12",
        "y2": "12"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "log-out" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Shopping_bag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
      }
    ],
    ["path", { "d": "M3 6h18" }],
    ["path", { "d": "M16 10a4 4 0 0 1-8 0" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "shopping-bag" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const DashboardSidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPath;
  let $page, $$unsubscribe_page;
  let $auth, $$unsubscribe_auth;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  validate_store(auth, "auth");
  $$unsubscribe_auth = subscribe(auth, (value) => $auth = value);
  let { collapsed = false } = $$props;
  let { mobileOpen = false } = $$props;
  const menuItems = [
    {
      icon: Layout_dashboard,
      label: "Resumen",
      href: "/dashboard"
    },
    {
      icon: Package,
      label: "Productos",
      href: "/productos"
    },
    {
      icon: Tag,
      label: "Categorías",
      href: "/categorias"
    },
    {
      icon: Award,
      label: "Marcas",
      href: "/marcas"
    },
    {
      icon: Shopping_bag,
      label: "Pedidos",
      href: "/pedidos"
    },
    {
      icon: Message_circle,
      label: "Mensajes",
      href: "/mensajes"
    },
    {
      icon: Settings,
      label: "Configuración",
      href: "/configuracion"
    }
  ];
  function isActive(href) {
    if (href === "/dashboard") {
      return currentPath === href;
    }
    return currentPath.startsWith(href);
  }
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0) $$bindings.collapsed(collapsed);
  if ($$props.mobileOpen === void 0 && $$bindings.mobileOpen && mobileOpen !== void 0) $$bindings.mobileOpen(mobileOpen);
  currentPath = $page.url.pathname;
  $$unsubscribe_page();
  $$unsubscribe_auth();
  return `    <aside class="${[
    "h-full bg-gray-900 text-white flex flex-col transition-all duration-300 ease-in-out hidden md:flex",
    (!collapsed ? "w-64" : "") + " " + (collapsed ? "w-20" : "")
  ].join(" ").trim()}"> <div class="p-4 border-b border-gray-800 flex items-center justify-between">${!collapsed ? `<div class="flex items-center space-x-3"><div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">${validate_component(Store, "Store").$$render($$result, { class: "w-6 h-6" }, {}, {})}</div> <div class="overflow-hidden"><h1 class="font-bold text-base" data-svelte-h="svelte-12mchzx">CatálogoExpress</h1> <p class="text-gray-400 text-xs" data-svelte-h="svelte-1vnrrzh">Panel Admin</p></div></div>` : `<div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center mx-auto">${validate_component(Store, "Store").$$render($$result, { class: "w-6 h-6" }, {}, {})}</div>`}</div>  <nav class="flex-1 p-3 overflow-y-auto"><div class="space-y-1">${each(menuItems, (item) => {
    return `<a${add_attribute("href", item.href, 0)} class="${[
      "flex items-center px-3 py-3 rounded-lg transition-colors group relative",
      (isActive(item.href) ? "bg-primary-600" : "") + " " + (isActive(item.href) ? "text-white" : "") + " " + (!isActive(item.href) ? "hover:bg-gray-800" : "") + " " + (collapsed ? "justify-center" : "")
    ].join(" ").trim()}"${add_attribute("title", collapsed ? item.label : "", 0)}>${validate_component(item.icon || missing_component, "svelte:component").$$render($$result, { class: "w-5 h-5 flex-shrink-0" }, {}, {})} ${!collapsed ? `<span class="ml-3 font-medium">${escape(item.label)}</span>` : ``}  ${collapsed ? `<div class="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">${escape(item.label)} </div>` : ``} </a>`;
  })}</div></nav>  <div class="p-3 border-t border-gray-800"><a href="/" target="_blank" class="${[
    "flex items-center px-3 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors",
    collapsed ? "justify-center" : ""
  ].join(" ").trim()}"${add_attribute("title", collapsed ? "Ver Tienda" : "", 0)}>${validate_component(Home, "Home").$$render($$result, { class: "w-5 h-5 flex-shrink-0" }, {}, {})} ${!collapsed ? `<span class="ml-3 font-medium" data-svelte-h="svelte-u2aosb">Ver Tienda</span>` : ``}</a></div>  <div class="p-3 border-t border-gray-800">${!collapsed && $auth.user ? `<div class="px-3 mb-3"><p class="font-medium text-sm truncate">${escape($auth.user?.name || "Admin")}</p> <p class="text-gray-400 text-xs truncate">${escape($auth.user?.email || "admin@app.com")}</p></div>` : ``} <button class="${[
    "flex items-center w-full px-3 py-3 rounded-lg hover:bg-red-900/20 text-red-300 hover:text-red-200 transition-colors",
    collapsed ? "justify-center" : ""
  ].join(" ").trim()}"${add_attribute("title", collapsed ? "Cerrar Sesión" : "", 0)}>${validate_component(Log_out, "LogOut").$$render($$result, { class: "w-5 h-5 flex-shrink-0" }, {}, {})} ${!collapsed ? `<span class="ml-3 font-medium" data-svelte-h="svelte-10k7ctr">Cerrar Sesión</span>` : ``}</button></div></aside>  ${mobileOpen ? `<div class="fixed inset-0 z-50 md:hidden"> <div class="fixed inset-0 bg-black bg-opacity-50"></div>  <aside class="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white flex flex-col shadow-2xl"> <div class="p-4 border-b border-gray-800 flex items-center justify-between"><div class="flex items-center space-x-3"><div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">${validate_component(Store, "Store").$$render($$result, { class: "w-6 h-6" }, {}, {})}</div> <div><h1 class="font-bold text-base" data-svelte-h="svelte-12mchzx">CatálogoExpress</h1> <p class="text-gray-400 text-xs" data-svelte-h="svelte-1vnrrzh">Panel Admin</p></div></div> <button class="p-2 rounded-lg hover:bg-gray-800">${validate_component(X, "X").$$render($$result, { class: "w-5 h-5" }, {}, {})}</button></div>  <nav class="flex-1 p-3 overflow-y-auto"><div class="space-y-1">${each(menuItems, (item) => {
    return `<a${add_attribute("href", item.href, 0)} class="${[
      "flex items-center px-3 py-3 rounded-lg transition-colors",
      (isActive(item.href) ? "bg-primary-600" : "") + " " + (isActive(item.href) ? "text-white" : "") + " " + (!isActive(item.href) ? "hover:bg-gray-800" : "")
    ].join(" ").trim()}">${validate_component(item.icon || missing_component, "svelte:component").$$render($$result, { class: "w-5 h-5" }, {}, {})} <span class="ml-3 font-medium">${escape(item.label)}</span> </a>`;
  })}</div></nav>  <div class="p-3 border-t border-gray-800"><a href="/" target="_blank" class="flex items-center px-3 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">${validate_component(Home, "Home").$$render($$result, { class: "w-5 h-5" }, {}, {})} <span class="ml-3 font-medium" data-svelte-h="svelte-u2aosb">Ver Tienda</span></a></div>  <div class="p-3 border-t border-gray-800">${$auth.user ? `<div class="px-3 mb-3"><p class="font-medium text-sm">${escape($auth.user?.name || "Admin")}</p> <p class="text-gray-400 text-xs">${escape($auth.user?.email || "admin@app.com")}</p></div>` : ``} <button class="flex items-center w-full px-3 py-3 rounded-lg hover:bg-red-900/20 text-red-300 hover:text-red-200 transition-colors">${validate_component(Log_out, "LogOut").$$render($$result, { class: "w-5 h-5" }, {}, {})} <span class="ml-3 font-medium" data-svelte-h="svelte-10k7ctr">Cerrar Sesión</span></button></div></aside></div>` : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let sidebarOpen = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `  <div class="flex h-screen overflow-hidden bg-gray-50"> ${validate_component(DashboardSidebar, "DashboardSidebar").$$render(
      $$result,
      { user: data.user, mobileOpen: sidebarOpen },
      {
        mobileOpen: ($$value) => {
          sidebarOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}  <div class="flex-1 flex flex-col overflow-hidden"> <header class="md:hidden bg-white shadow-sm z-10"><div class="flex items-center justify-between p-4"><button class="text-gray-600 hover:text-gray-900"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button> <span class="font-semibold text-gray-800" data-svelte-h="svelte-1w5d5ec">Dashboard</span></div></header>  <main class="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">${slots.default ? slots.default({}) : ``}</main></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
