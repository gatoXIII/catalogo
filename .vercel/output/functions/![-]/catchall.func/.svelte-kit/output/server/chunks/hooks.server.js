import { redirect } from "@sveltejs/kit";
async function handle({ event, resolve }) {
  const token = event.cookies.get("auth_token");
  const path = event.url.pathname;
  const PROTECTED_ROUTES = [
    "/dashboard",
    "/productos",
    "/pedidos",
    "/mensajes",
    "/configuracion",
    "/categorias"
  ];
  if (path === "/login") {
    if (token) {
      throw redirect(302, "/dashboard");
    }
    return await resolve(event);
  }
  const isProtectedRoute = PROTECTED_ROUTES.some(
    (route) => path === route || path.startsWith(route + "/")
  );
  if (isProtectedRoute && !token) {
    throw redirect(302, "/login");
  }
  if (token) {
    try {
      const userCookie = event.cookies.get("auth_user");
      if (userCookie) {
        event.locals.user = JSON.parse(userCookie);
      }
    } catch (error) {
      console.error("Error parseando usuario:", error);
      event.cookies.delete("auth_token", { path: "/" });
      event.cookies.delete("auth_user", { path: "/" });
      if (isProtectedRoute) {
        throw redirect(302, "/login");
      }
    }
  }
  return await resolve(event);
}
export {
  handle
};
