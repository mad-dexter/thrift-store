import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zcgxxpjrvbnrscqncfez.supabase.co";
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPBASE_APP_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
