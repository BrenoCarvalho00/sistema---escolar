// Cole aqui os dados do seu projeto Supabase.
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://ulblzanfvgzxvhleptyy.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_-N1Zwx-lg4JeBwCfJ7Gx7w_tFzPxQ-A";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
