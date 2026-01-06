import { createClient } from "@supabase/supabase-js";
import { P as PUBLIC_SUPABASE_URL } from "./public.js";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14YWNqdHdzaG1lZGFjY3dreGVhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTMzODE1NCwiZXhwIjoyMDgwOTE0MTU0fQ.1X0K1GKrnylu7FuVKy8L6yEIj0RdWiaBGIocGlexkTw";
const supabaseAdmin = createClient(
  PUBLIC_SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);
async function obtenerEstadisticasDashboard() {
  try {
    const { count: productosTotal } = await supabaseAdmin.from("productos").select("*", { count: "exact", head: true });
    const hoy = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const { count: pedidosHoy } = await supabaseAdmin.from("pedidos").select("*", { count: "exact", head: true }).gte("created_at", hoy);
    const { count: pedidosPendientes } = await supabaseAdmin.from("pedidos").select("*", { count: "exact", head: true }).eq("estado", "pendiente");
    const inicioMes = /* @__PURE__ */ new Date();
    inicioMes.setDate(1);
    inicioMes.setHours(0, 0, 0, 0);
    const { data: pedidosMes } = await supabaseAdmin.from("pedidos").select("total").gte("created_at", inicioMes.toISOString()).eq("estado", "entregado");
    const ingresosMes = pedidosMes?.reduce((sum, p) => sum + parseFloat(p.total), 0) || 0;
    const { count: productosBajoStock } = await supabaseAdmin.from("productos").select("*", { count: "exact", head: true }).lte("stock", "stock_minimo");
    return {
      productosTotal: productosTotal || 0,
      pedidosHoy: pedidosHoy || 0,
      pedidosPendientes: pedidosPendientes || 0,
      ingresosMes,
      productosBajoStock: productosBajoStock || 0,
      crecimientoVentas: 0
      // Calcular comparando con mes anterior
    };
  } catch (error) {
    console.error("Error obteniendo estadísticas:", error);
    return null;
  }
}
export {
  obtenerEstadisticasDashboard as o,
  supabaseAdmin as s
};
