
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Home, Map, Users, Building, Bot, Info, Sun, Moon, Database, Loader2 } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { getLoreDataShard } from "@/app/actions/loreActions";

export function AppSidebar() {
  const { open, toggleSidebar, isMobile } = useSidebar();
  const { toast } = useToast();
  const [theme, setTheme] = useState("dark");
  const [isGeneratingShard, setIsGeneratingShard] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("night-city-theme") || "dark";
    setTheme(storedTheme);
    if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("night-city-theme", newTheme);
    if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const handleGenerateShard = async () => {
    setIsGeneratingShard(true);
    try {
      const snippet = await getLoreDataShard();
      toast({
        title: "Data Shard Interceptado!",
        description: snippet,
        duration: 8000, // Show for 8 seconds
      });
    } catch (error) {
      console.error("Failed to generate lore shard:", error);
      toast({
        title: "Erro de Transmissão",
        description: "Não foi possível obter o data shard. Tente novamente, choom.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingShard(false);
    }
  };

  const navItems = [
    { href: "/", label: "Introdução", icon: Info }, 
    { href: "/historia", label: "História", icon: Home }, 
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
              <Link href={item.href} >
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
           <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleGenerateShard}
              disabled={isGeneratingShard}
              tooltip={{
                children: "Gerar Data Shard de Lore",
                className: "bg-primary text-primary-foreground",
              }}
              className="w-full justify-start"
            >
              {isGeneratingShard ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Database className="mr-2 h-5 w-5" />}
              <span>Data Shard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 mt-auto">
        <Button variant="ghost" onClick={toggleTheme} className="w-full justify-start text-muted-foreground hover:text-foreground">
          {theme === "dark" ? <Sun className="mr-2 h-5 w-5" /> : <Moon className="mr-2 h-5 w-5" />}
          <span>{theme === "dark" ? "Modo Claro" : "Modo Escuro"}</span>
        </Button>
        <Separator className="my-2" />
         {open && !isMobile && (
            <p className="text-xs text-muted-foreground text-center">
                © 2077 Night City Archives
            </p>
         )}
      </SidebarFooter>
    </>
  );
}
