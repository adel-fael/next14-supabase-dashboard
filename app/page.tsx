import { Button, buttonVariants } from '@/components/ui/button';
import { HrefLinks } from '@/lib/HrefLinks';
import { cn } from '@/lib/utils';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function Index() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <main className="">
      <div className="pt-[20rem] text-center">
        {user ? (
          <>
            <Link
              className={cn(buttonVariants({ variant: 'default' }), 'm-px')}
              href={HrefLinks.dashboardPage()}
            >
              Dashboard
            </Link>

            <div className={'mt-10'}>Hey, {user.email}.</div>
          </>
        ) : (
          <Link
            className={cn(buttonVariants({ variant: 'default' }), 'm-px')}
            href={HrefLinks.loginPage()}
          >
            Login Now
          </Link>
        )}

        <Link
          className={cn(buttonVariants({ variant: 'default' }), 'm-px')}
          href={HrefLinks.dashboardPage()}
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
}
