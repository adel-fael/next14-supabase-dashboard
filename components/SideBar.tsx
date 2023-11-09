'use client';
import { Button } from '@/components/ui/button';
import {
  BadgePlus,
  LogOut,
  Menu,
  Settings,
  Table2,
  Users,
  LibrarySquare,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigation = [
    {
      href: 'javascript:void(0)',
      name: 'Create Demo',
      icon: <BadgePlus />,
    },
    {
      href: '/dashboard/demos',
      name: 'List',
      icon: <LibrarySquare />,
    },
    {
      href: 'javascript:void(0)',
      name: 'Users',
      icon: <Users />,
    },
    {
      href: 'javascript:void(0)',
      name: 'Table',
      icon: <Table2 />,
    },
  ];

  return (
    <>
      <Button onClick={() => setOpen(true)} variant={'ghost'} className="m-1 sm:hidden">
        <Menu size={32} />
      </Button>

      <nav
        className={`sm:block ${
          open ? 'fixed' : 'hidden'
        } left-0 top-0 z-50 h-screen w-full space-y-8 border-r bg-primary-foreground sm:w-80`}
      >
        <div className="flex h-screen flex-col">
          <div className="flex h-20 items-center justify-between px-8">
            <Link href="javascript:void(0)" className="flex-none">
              Logo Here
            </Link>

            <Button
              onClick={() => setOpen(false)}
              variant={'ghost'}
              className={'sm:hidden'}
            >
              <X size={28} />
            </Button>
          </div>
          <div className="flex h-screen flex-1 flex-col overflow-auto">
            <ul className="flex-1 px-4 text-sm font-medium">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <Button
                    asChild
                    variant="ghost"
                    className="flex items-center justify-start gap-x-2 "
                  >
                    <Link href={item.href}>
                      <div className="">{item.icon}</div>
                      {item.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
            <div>
              <ul className="space-y-2 px-4 pb-4 text-sm font-medium">
                <li>
                  <Button
                    asChild
                    variant="ghost"
                    className="flex items-center justify-start gap-x-2 "
                  >
                    <Link href={'#'}>
                      <div className="">
                        <Settings />
                      </div>
                      Settings
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="destructive"
                    className="flex w-full items-center justify-start gap-x-2"
                  >
                    <div className="">
                      <LogOut />
                    </div>
                    Logout
                  </Button>
                </li>
              </ul>
              <div className="border-t px-4 py-4">
                <div className="flex items-center gap-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/79.jpg"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <span className="block text-sm font-semibold ">
                      Alivika tony
                    </span>
                    <Button variant="link" className={'p-0'}>
                      <Link href={'#'} className={'mt-px block text-xs'}>
                        View profile
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
