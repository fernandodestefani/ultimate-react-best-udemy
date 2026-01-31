import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://asobsdnwbuibkcjbtmiq.supabase.co";
const supabaseKey = "sb_publishable_8reQx6fOooSaZg60kNqRmQ_SAEXNxVH";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;