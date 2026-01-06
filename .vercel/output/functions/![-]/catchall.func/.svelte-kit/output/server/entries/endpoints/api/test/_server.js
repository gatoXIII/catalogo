import { json } from "@sveltejs/kit";
import { s as supabase } from "../../../../chunks/supabaseClient.js";
import { s as supabaseAdmin } from "../../../../chunks/supabaseServer.js";
async function GET() {
  try {
    const tests = [];
    const { data: configData, error: configError } = await supabase.from("configuracion").select("nombre_empresa").single();
    tests.push({
      name: "Conexión Supabase (público)",
      success: !configError,
      data: configData,
      error: configError?.message
    });
    const { count: productosCount } = await supabaseAdmin.from("productos").select("*", { count: "exact", head: true });
    tests.push({
      name: "Conexión Supabase (admin)",
      success: productosCount !== null,
      data: { productosCount }
    });
    const { data: categoriasData, error: categoriasError } = await supabase.from("categorias").select("nombre").limit(5);
    tests.push({
      name: "Leer categorías",
      success: !categoriasError,
      data: categoriasData,
      error: categoriasError?.message
    });
    const { data: productosData, error: productosError } = await supabase.from("productos").select("nombre, precio").limit(5);
    tests.push({
      name: "Leer productos",
      success: !productosError,
      data: productosData,
      error: productosError?.message
    });
    const { data: vistaData, error: vistaError } = await supabase.from("vista_productos_completos").select("nombre, categoria_nombre, marca_nombre").limit(3);
    tests.push({
      name: "Vista productos completos",
      success: !vistaError,
      data: vistaData,
      error: vistaError?.message
    });
    const allSuccess = tests.every((t) => t.success);
    return json({
      success: allSuccess,
      message: allSuccess ? "✅ Todas las conexiones funcionan correctamente" : "⚠️ Algunos tests fallaron",
      tests,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  } catch (error) {
    return json({
      success: false,
      error: error.message,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }, { status: 500 });
  }
}
export {
  GET
};
