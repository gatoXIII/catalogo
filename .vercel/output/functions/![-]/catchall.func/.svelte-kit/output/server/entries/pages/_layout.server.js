import { s as supabase } from "../../chunks/supabaseClient.js";
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
        descripcion_empresa: "Tienda en línea con pedidos por WhatsApp"
      }
    };
  } catch (error) {
    console.error("Error en layout load:", error);
    return {
      configuracion: {
        nombre_empresa: "CatálogoExpress",
        whatsapp_numero: "7121920418",
        moneda_simbolo: "$",
        descripcion_empresa: "Tienda en línea con pedidos por WhatsApp"
      }
    };
  }
}
export {
  load
};
