import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  atob("aHR0cHM6Ly95d2Vwb3F1YW1sZm9vemtvdXd4by5zdXBhYmFzZS5jbwo="),
  atob("c2JfcHVibGlzaGFibGVfQmFJR24xM3VzczhIOHJtdzIzQTYyUV95WE9Rc3JzUwo=")
);