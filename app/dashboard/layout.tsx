import type { Metadata } from 'next';

import { ChangeTheme } from '@/components/ChangeTheme';
import { NavbarMain } from '@/components/NavbarMain';
import { UserNav } from './components/user-nav';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="">
        <div className="mx-10 flex items-center  gap-4">
          <NavbarMain />

          <div className={'ml-auto  flex items-center gap-4'}>
            <ChangeTheme />

            <UserNav />
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
