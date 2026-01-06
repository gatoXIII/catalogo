import { w as writable } from "./index.js";
const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
  initialized: false
  // Nuevo: para saber si ya se inicializó
};
function createAuthStore() {
  const { subscribe, set, update } = writable(initialState);
  const init = () => {
    return false;
  };
  return {
    subscribe,
    // Login simple y directo
    login: async (username, password) => {
      update((state) => ({ ...state, loading: true, error: null }));
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (username === "admin" && password === "admin123") {
        const user = {
          id: 1,
          username: "admin",
          name: "Administrador",
          email: "admin@catalogoexpress.com",
          role: "admin"
        };
        localStorage.setItem("auth_user", JSON.stringify(user));
        localStorage.setItem("auth_token", "demo_token_" + Date.now());
        set({
          isAuthenticated: true,
          user,
          loading: false,
          error: null,
          initialized: true
        });
        return { success: true, user };
      } else {
        const errorMsg = "Usuario o contraseña incorrectos";
        set({
          isAuthenticated: false,
          user: null,
          loading: false,
          error: errorMsg,
          initialized: true
        });
        return { success: false, error: errorMsg };
      }
    },
    // Logout
    logout: () => {
      set({
        ...initialState,
        initialized: true
      });
    },
    // Inicializar
    init
  };
}
const auth = createAuthStore();
export {
  auth as a
};
