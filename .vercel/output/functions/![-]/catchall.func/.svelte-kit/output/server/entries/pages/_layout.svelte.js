import { c as create_ssr_component, a as validate_component, v as validate_store, s as subscribe, e as escape, d as add_attribute } from "../../chunks/ssr.js";
import { b as cantidadItems, S as Shopping_cart } from "../../chunks/carritoStore.js";
import "../../chunks/authStore.js";
import { S as Store } from "../../chunks/store.js";
import { S as Settings } from "../../chunks/settings.js";
import { I as Icon } from "../../chunks/Icon.js";
import { p as page } from "../../chunks/stores.js";
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CarritoIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cantidadItems, $$unsubscribe_cantidadItems;
  validate_store(cantidadItems, "cantidadItems");
  $$unsubscribe_cantidadItems = subscribe(cantidadItems, (value) => $cantidadItems = value);
  $$unsubscribe_cantidadItems();
  return `<a href="/carrito" class="relative p-2 text-gray-700 hover:text-primary-600 transition-colors" aria-label="Carrito de compras">${validate_component(Shopping_cart, "ShoppingCart").$$render($$result, { class: "w-6 h-6" }, {}, {})} ${$cantidadItems > 0 ? `<span class="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">${escape($cantidadItems)}</span>` : ``}</a>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <header class="bg-white shadow-md sticky top-0 z-50"><div class="container mx-auto px-4"><div class="flex justify-between items-center py-4"> <a href="/" class="flex items-center space-x-2 text-primary-700 hover:text-primary-800">${validate_component(Store, "Store").$$render($$result, { class: "w-8 h-8" }, {}, {})} <span class="text-xl font-bold" data-svelte-h="svelte-s8z8d4">CatálogoExpress</span></a>  <nav class="hidden md:flex items-center space-x-6"> <a href="/dashboard" class="flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-medium transition-colors" title="Panel de Administración">${validate_component(Settings, "Settings").$$render($$result, { class: "w-5 h-5" }, {}, {})}</a>  <div class="ml-4">${validate_component(CarritoIcon, "CarritoIcon").$$render($$result, {}, {}, {})}</div></nav>  <div class="flex items-center space-x-4 md:hidden"> <a href="/dashboard" class="p-2 rounded-md text-gray-700 hover:bg-gray-100" title="Panel de Administración">${validate_component(Settings, "Settings").$$render($$result, { class: "w-5 h-5" }, {}, {})}</a> ${validate_component(CarritoIcon, "CarritoIcon").$$render($$result, {}, {}, {})} <button class="p-2 rounded-md text-gray-700 hover:bg-gray-100"${add_attribute("aria-label", "Abrir menú", 0)}>${`${validate_component(Menu, "Menu").$$render($$result, { class: "w-6 h-6" }, {}, {})}`}</button></div></div>  ${``}</div></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const colorPalettes = [
  {
    id: "blue-default",
    name: "Azul Profesional",
    description: "Paleta por defecto - Confianza y profesionalismo",
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a"
    },
    preview: ["#3b82f6", "#2563eb", "#1d4ed8"]
  },
  {
    id: "green-nature",
    name: "Verde Natura",
    description: "Frescura y sostenibilidad",
    primary: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d"
    },
    preview: ["#22c55e", "#16a34a", "#15803d"]
  },
  {
    id: "purple-elegant",
    name: "Púrpura Elegante",
    description: "Creatividad y lujo",
    primary: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87"
    },
    preview: ["#a855f7", "#9333ea", "#7e22ce"]
  },
  {
    id: "orange-energy",
    name: "Naranja Energético",
    description: "Vitalidad y entusiasmo",
    primary: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12"
    },
    preview: ["#f97316", "#ea580c", "#c2410c"]
  },
  {
    id: "pink-modern",
    name: "Rosa Moderno",
    description: "Juventud y dinamismo",
    primary: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843"
    },
    preview: ["#ec4899", "#db2777", "#be185d"]
  },
  {
    id: "teal-fresh",
    name: "Turquesa Fresco",
    description: "Claridad y modernidad",
    primary: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a"
    },
    preview: ["#14b8a6", "#0d9488", "#0f766e"]
  },
  {
    id: "red-intense",
    name: "Rojo Intenso",
    description: "Pasión y urgencia",
    primary: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d"
    },
    preview: ["#ef4444", "#dc2626", "#b91c1c"]
  },
  {
    id: "indigo-corporate",
    name: "Índigo Corporate",
    description: "Confianza y estabilidad",
    primary: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81"
    },
    preview: ["#6366f1", "#4f46e5", "#4338ca"]
  },
  {
    id: "black-yellow-contrast",
    name: "Negro y Amarillo",
    description: "Alto contraste - Máxima visibilidad",
    primary: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12"
    },
    secondary: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717"
    },
    preview: ["#eab308", "#171717", "#facc15"],
    highContrast: true
  },
  {
    id: "black-white-contrast",
    name: "Negro y Blanco",
    description: "Alto contraste - Elegancia minimalista",
    primary: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717"
    },
    secondary: {
      50: "#ffffff",
      100: "#fefefe",
      200: "#fafafa",
      300: "#f5f5f5",
      400: "#e5e5e5",
      500: "#d4d4d4",
      600: "#a3a3a3",
      700: "#737373",
      800: "#525252",
      900: "#404040"
    },
    preview: ["#171717", "#404040", "#737373"],
    highContrast: true
  }
];
function getPaletteById(id) {
  return colorPalettes.find((palette) => palette.id === id) || colorPalettes[0];
}
function generateCSSVariables(palette) {
  if (!palette) return "";
  let cssVars = "";
  if (palette.primary) {
    Object.entries(palette.primary).forEach(([shade, color]) => {
      const rgb = hexToRgb(color);
      cssVars += `--color-primary-${shade}: ${rgb};
`;
    });
  }
  if (palette.secondary) {
    Object.entries(palette.secondary).forEach(([shade, color]) => {
      const rgb = hexToRgb(color);
      cssVars += `--color-secondary-${shade}: ${rgb};
`;
    });
  }
  return cssVars;
}
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}` : "0 0 0";
}
function applyDynamicColors(variables) {
  if (typeof document === "undefined") return;
  let styleElement = document.getElementById("dynamic-colors");
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = "dynamic-colors";
    document.head.appendChild(styleElement);
  }
  styleElement.textContent = `:root { ${variables} }`;
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let configuracion;
  let cssVariables;
  let isAdminRoute;
  let isLoginRoute;
  let isPublicRoute;
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  configuracion = data?.configuracion;
  cssVariables = configuracion?.colores_tema?.palette_id ? generateCSSVariables(getPaletteById(configuracion.colores_tema.palette_id)) : "";
  isAdminRoute = $page.url.pathname.startsWith("/dashboard") || $page.url.pathname.startsWith("/productos") || $page.url.pathname.startsWith("/pedidos") || $page.url.pathname.startsWith("/mensajes") || $page.url.pathname.startsWith("/configuracion") || $page.url.pathname.startsWith("/categorias") || $page.url.pathname.startsWith("/marcas");
  isLoginRoute = $page.url.pathname === "/login";
  isPublicRoute = !isAdminRoute && !isLoginRoute;
  {
    if (cssVariables) {
      applyDynamicColors(cssVariables);
    }
  }
  $$unsubscribe_page();
  return `  ${isPublicRoute ? ` <div class="min-h-screen bg-gray-50 flex flex-col">${validate_component(Header, "Header").$$render($$result, { configuracion }, {}, {})} <main class="flex-grow container mx-auto px-4 py-8">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, { configuracion }, {}, {})}</div>` : ` ${slots.default ? slots.default({}) : ``}`}`;
});
export {
  Layout as default
};
