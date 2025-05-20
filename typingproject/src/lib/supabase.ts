import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hmngjytlcfyxwzpfdnmv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtbmdqeXRsY2Z5eHd6cGZkbm12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MTYyODcsImV4cCI6MjA2MzI5MjI4N30.DnbSBUQNL-mW7qV4QBhRijNciQiGb6pICl7Pcdul0Ag';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 