import { s as supabase } from "../../../chunks/supabaseClient.js";
async function load() {
  try {
    const { data: configuracion, error } = await supabase.from("configuracion").select("*").single();
    if (error) {
      console.error("Error cargando configuración:", error);
    }
    return {
      configuracion: configuracion || {
        nombre_empresa: "CatálogoExpress",
        whatsapp_numero: "7121920418",
        moneda_simbolo: "$",
        impuesto_porcentaje: 16
      }
    };
  } catch (error) {
    console.error("Error en carrito load:", error);
    return {
      configuracion: {
        nombre_empresa: "CatálogoExpress",
        whatsapp_numero: "7121920418",
        moneda_simbolo: "$",
        impuesto_porcentaje: 16
      }
    };
  }
}
export {
  load
};
