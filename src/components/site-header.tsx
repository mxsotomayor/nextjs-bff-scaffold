"use client"
import * as React from "react"
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export function SiteHeader() {
  const { setTheme } = useTheme();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Documents</h1>
        <div className="ml-auto flex items-center gap-2">
          <Switch
            id="theme-switcher"
            onCheckedChange={(checked) => {
              setTheme(checked ? "light" : "dark");
            }}
          />
        </div>
      </div>
    </header>
  );
}
