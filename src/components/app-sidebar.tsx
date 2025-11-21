"use client";

import * as React from "react";

import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { LayoutDashboardIcon, ListIcon } from "lucide-react";
import { useSession } from "next-auth/react";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const itmes = {
  navMain: [
    {
      title: "Product",
      url: "/dashboard/product",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Order",
      url: "/dashboard/order",
      icon: ListIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession();

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="h-16 w-16">
                <Image src={"/images/logo/logo.jpg"} alt="logo-not-found" width={54} height={54} />
                <span className="text-base font-semibold">LUCCI STORE</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={itmes.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={session?.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
