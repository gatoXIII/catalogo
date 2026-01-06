import { o as obtenerEstadisticasDashboard } from "../../../../chunks/supabaseServer.js";
import { s as supabase } from "../../../../chunks/supabaseClient.js";
async function load() {
  try {
    const estadisticas = await obtenerEstadisticasDashboard();
    const { data: pedidosRecientes } = await supabase.from("vista_pedidos_resumen").select("*").order("created_at", { ascending: false }).limit(5);
    const { data: productosPopulares } = await supabase.from("productos").select("id, nombre, imagen_url, stock, precio").eq("activo", true).eq("destacado", true).limit(5);
    return {
      estadisticas: estadisticas || {
        productosTotal: 0,
        pedidosHoy: 0,
        pedidosPendientes: 0,
        ingresosMes: 0,
        productosBajoStock: 0,
        crecimientoVentas: 0
      },
      pedidosRecientes: pedidosRecientes || [],
      productosPopulares: productosPopulares || []
    };
  } catch (error) {
    console.error("Error en dashboard load:", error);
    return {
      estadisticas: {
        productosTotal: 0,
        pedidosHoy: 0,
        pedidosPendientes: 0,
        ingresosMes: 0,
        productosBajoStock: 0,
        crecimientoVentas: 0
      },
      pedidosRecientes: [],
      productosPopulares: []
    };
  }
}
export {
  load
};
