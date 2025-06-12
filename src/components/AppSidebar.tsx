
"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Home, Map, Users, Building, Bot, Info } from "lucide-react"; // Added Info icon
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AppSidebar() {
  const { open, toggleSidebar, isMobile } = useSidebar();

  const navItems = [
    { href: "/", label: "Introdução", icon: Info }, // Changed Home to Info for better context
    { href: "/historia", label: "História", icon: Home }, // Kept Home for História
    { href: "/distritos", label: "Distritos", icon: Map },
    { href: "/gangues", label: "Gangues de Night City", icon: Users },
    { href: "/corporacoes", label: "Corporaçõs", icon: Building },
  ];

  return (
    <>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
           <Bot size={32} className="text-primary" />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-foreground">
              Night City Archives
            </h2>
            { isMobile && <p className="text-xs text-muted-foreground">Bem-vindo, Choomba!</p>}
          </div>
        </div>
      </SidebarHeader>
      <Separator className="mb-2" />
      <SidebarContent className="p-4">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <Link href={item.href} passHref legacyBehavior>
                <SidebarMenuButton
                  tooltip={{
                    children: item.label,
                    className: "bg-primary text-primary-foreground",
                  }}
                  className="w-full justify-start"
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 mt-auto">
        <Separator className="mb-2" />
         {open && !isMobile && (
            <p className="text-xs text-muted-foreground text-center">
                © 2077 Night City Archives
            </p>
         )}
      </SidebarFooter>
    </>
  );
}
