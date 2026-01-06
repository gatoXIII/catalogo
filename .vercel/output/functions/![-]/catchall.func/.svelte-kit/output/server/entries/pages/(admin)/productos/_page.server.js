import { s as supabase } from "../../../../chunks/supabaseClient.js";
async function load() {
  try {
    const { data: productos, error: errorProductos } = await supabase.from("vista_productos_completos").select("*").order("created_at", { ascending: false });
    const { data: categorias, error: errorCategorias } = await supabase.from("categorias").select("id, nombre, slug, activo").order("orden", { ascending: true });
    const { data: marcas, error: errorMarcas } = await supabase.from("marcas").select("id, nombre, activo").order("nombre", { ascending: true });
    if (errorProductos || errorCategorias || errorMarcas) {
      console.error("Error cargando datos:", {
        errorProductos,
        errorCategorias,
        errorMarcas
      });
    }
    return {
      productos: productos || [],
      categorias: categorias || [],
      marcas: marcas || []
    };
  } catch (error) {
    console.error("Error en productos load:", error);
    return {
      productos: [],
      categorias: [],
      marcas: []
    };
  }
}
export {
  load
};
