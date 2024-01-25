import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import styles from './page.module.css';

export default function Login({ searchParams }: { searchParams: { message: string } }) {

  const signIn = async (formData: FormData) => {
    'use server';
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      return redirect('/login?message=Could not authenticate user');
    }
    return redirect('/');
  }

  // const signUp = async (formData: FormData) => {
  //   'use server';
  //   const origin = headers().get('origin');
  //   const email = formData.get('email') as string;
  //   const password = formData.get('password') as string;
  //   const cookieStore = cookies();
  //   const supabase = createClient(cookieStore);
  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${origin}/auth/callback`,
  //     },
  //   })
  //   if (error) {
  //     return redirect('/login?message=Could not authenticate user');
  //   }
  //   return redirect('/login?message=Check email to continue sign in process');
  // }

  return (
    <div className="content">
      <form className={styles.loginForm} action={signIn}>
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="you@example.com" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="••••••••" required />
        <button>Sign In</button>
        {/* <button formAction={signUp}>Sign Up</button> */}
        {searchParams?.message && (
          <p className={styles.errorMessage}>{searchParams.message}</p>
        )}
      </form>
    </div>
  )
}
