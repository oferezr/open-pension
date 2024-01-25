import { SUPABASE_ENABLED } from '@/lib/config';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';

export async function AuthAction() {
  if (!SUPABASE_ENABLED) return <></>;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  return (user ? <>hey {user.email} :) <Link href="/logout">Logout</Link></> : <Link href='/login'>Login</Link>)
}
