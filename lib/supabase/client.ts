import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '@/lib/config';
import { createBrowserClient } from '@supabase/ssr';

export const createClient = () =>
  createBrowserClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY
  )
