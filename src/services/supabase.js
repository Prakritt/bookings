import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lnemxbldeotkibkrgjue.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuZW14YmxkZW90a2lia3JnanVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3OTI4MjIsImV4cCI6MjAzMzM2ODgyMn0.fIQ52htjYmpuDp8FQKlUdY2QvHXBciZLsUrbS58iUbQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
