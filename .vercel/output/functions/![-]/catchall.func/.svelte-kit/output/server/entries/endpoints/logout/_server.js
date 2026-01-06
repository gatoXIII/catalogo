import { json } from "@sveltejs/kit";
async function POST({ cookies }) {
  try {
    cookies.delete("auth_token", { path: "/" });
    cookies.delete("auth_user", { path: "/" });
    return json({ success: true, message: "Sesión cerrada correctamente" });
  } catch (error) {
    console.error("Error en logout:", error);
    return json(
      { success: false, error: "Error al cerrar sesión" },
      { status: 500 }
    );
  }
}
export {
  POST
};
