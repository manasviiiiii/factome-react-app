import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oezvghfrookcfardrhtn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lenZnaGZyb29rY2ZhcmRyaHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ3Njc1NzIsImV4cCI6MjAwMDM0MzU3Mn0.mroe_DQgLcay4XwmEpMXY8Fo2WUr1L0-DtI-wJ-8AjU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
