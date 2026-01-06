import { createClient } from "@supabase/supabase-js";
import { P as PUBLIC_SUPABASE_URL, a as PUBLIC_SUPABASE_ANON_KEY } from "./public.js";
const supabase = createClient(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: false
      // No usar sesiones de Supabase Auth
    }
  }
);
function generateSlug(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
export {
  generateSlug as g,
  supabase as s
};
