import { redirect } from "@sveltejs/kit";
async function load({ locals, cookies }) {
  if (!locals.user) {
    const token = cookies.get("auth_token");
    const userCookie = cookies.get("auth_user");
    if (!token || !userCookie) {
      throw redirect(303, "/login");
    }
    try {
      locals.user = JSON.parse(userCookie);
    } catch (error) {
      console.error("Error parseando usuario en layout:", error);
      throw redirect(303, "/login");
    }
  }
  return {
    user: locals.user
  };
}
export {
  load
};
