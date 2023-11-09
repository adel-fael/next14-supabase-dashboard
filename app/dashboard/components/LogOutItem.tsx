"use client"

import { signOut } from "@/app/_actions"
import { DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu"




export const LogOutItem = () => {
  return  <DropdownMenuItem onClick={()=>signOut()}>
  Log out
  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
</DropdownMenuItem>
}