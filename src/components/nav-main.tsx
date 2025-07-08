"use client";

import React from "react";
import { type Icon } from "@tabler/icons-react";
import { LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Label } from "./ui/label";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavMain ({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon | LucideIcon;
  }[];
}){

  const pathName = usePathname();

  console.log("pahtnar", pathName);

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2"> 
        <SidebarMenu>
          <Label className="text-xs">Platform</Label>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title} isActive={pathName.indexOf(item.url) === 0}>
              <Link href={item.url} className="flex gap-2 items-center">  {item.icon && <item.icon />}
                <span>{item.title}</span></Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

 
