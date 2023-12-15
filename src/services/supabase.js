import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://kcxurjxgnowsibpyovff.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjeHVyanhnbm93c2licHlvdmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwNDQyOTUsImV4cCI6MjAxNzYyMDI5NX0.YWuSdZ5jVnQlDDMvv54QHWElOgj4okiWN43FDZ55TPY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

