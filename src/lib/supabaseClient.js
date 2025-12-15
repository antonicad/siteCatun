import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rqliqpccmpucboptwxve.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxbGlxcGNjbXB1Y2JvcHR3eHZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4MTMzOTMsImV4cCI6MjA4MTM4OTM5M30.a1jgr2gIN3x_xyKr6UIvt743I5OZsbUgiP9tQmgRrZY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
