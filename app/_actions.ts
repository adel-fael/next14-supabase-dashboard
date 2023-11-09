'use server';

import { HrefLinks } from '@/lib/HrefLinks';
import { LoginFormSchemaType } from '@/types/Login';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
const cookieStore = cookies();
const supabase = createClient(cookieStore);

export const GetClients = async () => {
  const { data: clients } = await supabase.from('Client').select('*');

  return clients;
};

// SIGNOUT
export const signOut = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  await supabase.auth.signOut();
  return redirect(HrefLinks.loginPage());
};

// LOGIN
export const logIn = async (authData: LoginFormSchemaType) => {

    await supabase.auth.signInWithPassword({
      email: authData.email,
      password: authData.password,
    });

    return redirect(HrefLinks.homePage());

};
