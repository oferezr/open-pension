import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '@/lib/config';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
  return createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // we can get here when in a server component, and it is
            // fine as long as we also have supabase middleware in place
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // we can get here when in a server component, and it is
            // fine as long as we also have supabase middleware in place
          }
        },
      },
    }
  )
}
