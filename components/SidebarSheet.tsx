'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { HrefLinks } from '@/lib/HrefLinks';
// const SHEET_SIDES = ["top", "right", "bottom", "left"] as const
// type SheetSide = (typeof SHEET_SIDES)[number]

export function SidebarSheet() {
  return (
    <div className="grid  gap-2">
      {/* {SHEET_SIDES.map((side) => ( */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>sheet.io</SheetDescription>
          </SheetHeader>
          <ul className="grid gap-4 py-4">
            <li className="">
              <SheetClose asChild>
                <Link href={HrefLinks.homePage()} className="">
                  Home
                </Link>
              </SheetClose>

            </li>
            <li className="">
            <SheetClose asChild>
                <Link href={HrefLinks.dashboardPage()} className="">
                  Dashboard
                </Link>
              </SheetClose>

            </li>
            <li className="">
              <SheetClose asChild>
                <Link href={HrefLinks.dashboardListPage()}>List</Link>
              </SheetClose>
            </li>
            <li className="">
              <SheetClose asChild>
                <Link href={HrefLinks.dashboardCreateDemoPage()}>
                  Create Demo
                </Link>
              </SheetClose>
            </li>
          </ul>
          {/* <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter> */}
        </SheetContent>
      </Sheet>
      {/* ))} */}
    </div>
  );
}
