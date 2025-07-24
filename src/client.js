import { createClient } from '@supabase/supabase-js';

const URL = 'https://qlheibrgsrmgvosytefz.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsaGVpYnJnc3JtZ3Zvc3l0ZWZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMTMwMTQsImV4cCI6MjA2ODg4OTAxNH0.tlOTR6kcsuyJc5daoIh3Sbi9I-m29_XITFLrvcolIcc';

const supabase = createClient(URL, API_KEY);

export { supabase };