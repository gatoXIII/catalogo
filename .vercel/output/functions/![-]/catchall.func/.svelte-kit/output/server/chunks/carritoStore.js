import { c as create_ssr_component, a as validate_component } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { d as derived, w as writable } from "./index.js";
const Shopping_cart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "8", "cy": "21", "r": "1" }],
    ["circle", { "cx": "19", "cy": "21", "r": "1" }],
    [
      "path",
      {
        "d": "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "shopping-cart" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
function loadFromStorage() {
  return [];
}
function createCarritoStore() {
  const { subscribe, set, update } = writable(loadFromStorage());
  return {
    subscribe,
    // Agregar producto al carrito
    agregarProducto: (producto, cantidad = 1) => {
      update((items) => {
        const existingIndex = items.findIndex((item) => item.id === producto.id);
        if (existingIndex >= 0) {
          const updatedItems = [...items];
          const nuevaCantidad = updatedItems[existingIndex].cantidad + cantidad;
          const stockDisponible = producto.stock || updatedItems[existingIndex].stock || 999;
          updatedItems[existingIndex].cantidad = Math.min(nuevaCantidad, stockDisponible);
          return updatedItems;
        } else {
          const nuevoItem = {
            id: producto.id,
            // UUID de Supabase
            nombre: producto.nombre,
            precio: producto.precio_oferta || producto.precio,
            precio_unitario: producto.precio_oferta || producto.precio,
            precio_original: producto.precio,
            cantidad: Math.min(cantidad, producto.stock || 999),
            stock: producto.stock || 999,
            imagen_url: producto.imagen_url || null,
            marca: producto.marca_nombre || producto.marca || null,
            categoria: producto.categoria_nombre || producto.categoria || null,
            sku: producto.sku || null,
            descripcion_larga: producto.descripcion_larga || null
          };
          return [...items, nuevoItem];
        }
      });
    },
    // Eliminar producto del carrito
    eliminarProducto: (productoId) => {
      update((items) => items.filter((item) => item.id !== productoId));
    },
    // Actualizar cantidad de un producto
    actualizarCantidad: (productoId, cantidad) => {
      update((items) => {
        if (cantidad <= 0) {
          return items.filter((item) => item.id !== productoId);
        }
        return items.map((item) => {
          if (item.id === productoId) {
            const nuevaCantidad = Math.min(cantidad, item.stock || 999);
            return { ...item, cantidad: nuevaCantidad };
          }
          return item;
        });
      });
    },
    // Limpiar todo el carrito
    limpiarCarrito: () => {
      set([]);
    },
    // Obtener un producto específico
    obtenerProducto: (productoId) => {
      let producto = null;
      update((items) => {
        producto = items.find((item) => item.id === productoId);
        return items;
      });
      return producto;
    },
    // Verificar stock disponible para todos los productos
    verificarStock: async () => {
      return true;
    }
  };
}
const carrito = createCarritoStore();
const cantidadItems = derived(
  carrito,
  ($carrito) => $carrito.reduce((total, item) => total + item.cantidad, 0)
);
const subtotal = derived(
  carrito,
  ($carrito) => $carrito.reduce(
    (total, item) => total + item.precio_unitario * item.cantidad,
    0
  )
);
const impuesto = derived(
  [subtotal],
  ([$subtotal]) => {
    const porcentajeImpuesto = 0.18;
    return $subtotal * porcentajeImpuesto;
  }
);
const totalConImpuestos = derived(
  [subtotal, impuesto],
  ([$subtotal, $impuesto]) => $subtotal + $impuesto
);
const carritoVacio = derived(
  carrito,
  ($carrito) => $carrito.length === 0
);
derived(
  [carrito, subtotal, impuesto, totalConImpuestos, cantidadItems],
  ([$carrito, $subtotal, $impuesto, $total, $cantidad]) => ({
    items: $carrito,
    subtotal: $subtotal,
    impuesto: $impuesto,
    total: $total,
    cantidadItems: $cantidad,
    cantidadProductos: $carrito.length
  })
);
export {
  Shopping_cart as S,
  carritoVacio as a,
  cantidadItems as b,
  carrito as c
};
