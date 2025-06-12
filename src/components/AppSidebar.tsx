
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Home, Map, Users, Building, Info, Database, ChevronDown, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { districts, type District } from "@/lib/content/districts";
import { gangs, type Gang } from "@/lib/content/gangs";
import { corporations, type Corporation } from "@/lib/content/corporations";

const generateAnchorId = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/:/g, '') // Remove colons
    .replace(/\(/g, '') // Remove opening parenthesis
    .replace(/\)/g, '') // Remove closing parenthesis
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ''); // Remove other non-alphanumeric characters except hyphens
};

export function AppSidebar() {
  const { open, isMobile, setOpenMobile } = useSidebar();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (label: string) => {
    setExpandedSections(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const historiaSubItems = [
    { label: "Primeiros Passos", anchor: generateAnchorId("Os Primeiros Passos: A Visão de Richard Night (1960s - 1990s)") },
    { label: "Guerras Corporativas", anchor: generateAnchorId("A Era das Guerras Corporativas (2000s - 2040s)") },
    { label: "Reconstrução", anchor: generateAnchorId("A Reconstrução e o Domínio Corporativo (2040s - 2077)") },
    { label: "Megacorporações", anchor: generateAnchorId("As Megacorporações: Os Verdadeiros Donos de Night City") },
    { label: "Gangues", anchor: generateAnchorId("As Gangues: O Submundo de Night City") },
    { label: "Estado Atual (2077)", anchor: generateAnchorId("Night City em 2077: O Estado Atual") },
  ];

  const navItems = [
    { href: "/", label: "Introdução", icon: Info },
    { 
      href: "/historia", 
      label: "História", 
      icon: Home, 
      subItems: historiaSubItems.map(sub => ({ label: sub.label, href: `#${sub.anchor}`}))
    },
    { 
      href: "/distritos", 
      label: "Distritos", 
      icon: Map,
      subItems: districts.map(d => ({ label: d.name.split(":")[0], href: `#${generateAnchorId(d.name)}`}))
    },
    { 
      href: "/gangues", 
      label: "Gangues de Night City", 
      icon: Users,
      subItems: gangs.map(g => ({ label: g.name.split(":")[0], href: `#${generateAnchorId(g.name)}`}))
    },
    { 
      href: "/corporacoes", 
      label: "Corporaçõs", 
      icon: Building,
      subItems: corporations.map(c => ({ label: c.name.split(":")[0], href: `#${generateAnchorId(c.name)}`}))
    },
    { href: "/datashard", label: "Data Shard", icon: Database },
  ];

  const handleSubItemClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  // Effect to load expanded sections from localStorage
  useEffect(() => {
    const storedExpandedSections = localStorage.getItem("expandedSidebarSections");
    if (storedExpandedSections) {
      setExpandedSections(JSON.parse(storedExpandedSections));
    }
  }, []);

  // Effect to save expanded sections to localStorage
  useEffect(() => {
    localStorage.setItem("expandedSidebarSections", JSON.stringify(expandedSections));
  }, [expandedSections]);


  return (
    <>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 100 100" className="text-primary">
            <defs>
              <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path fill="url(#iconGradient)" d="M50,5A45,45,0,0,0,5,50H15A35,35,0,0,1,50,15V5Z M5,50A45,45,0,0,0,50,95V85A35,35,0,0,1,15,50H5Z M50,95A45,45,0,0,0,95,50H85A35,35,0,0,1,50,85V95Z M95,50A45,45,0,0,0,50,5V15A35,35,0,0,1,85,50H95Z M50,25A25,25,0,1,0,75,50,25,25,0,0,0,50,25Z M50,30A20,20,0,1,1,30,50,20,20,0,0,1,50,30Z"/>
          </svg>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-foreground">
              Night City Archives
            </h2>
            {isMobile && <p className="text-xs text-muted-foreground">Bem-vindo, Choomba!</p>}
          </div>
        </div>
      </SidebarHeader>
      <Separator className="mb-2" />
      <SidebarContent className="p-4">
        <SidebarMenu>
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              <SidebarMenuItem>
                <div className="flex w-full items-center">
                  <Link href={item.href} passHref className="flex-grow">
                    <SidebarMenuButton
                      tooltip={{
                        children: item.label,
                        className: "bg-primary text-primary-foreground",
                      }}
                      className="w-full justify-start"
                      onClick={item.subItems && isMobile ? (e) => { e.preventDefault(); toggleSection(item.label); } : (isMobile ? () => setOpenMobile(false) : undefined) }
                    >
                      <item.icon className="mr-2 h-5 w-5" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                  {item.subItems && (
                    <button
                      onClick={() => toggleSection(item.label)}
                      className="p-2 text-sidebar-foreground hover:text-primary"
                      aria-label={`Expandir ${item.label}`}
                    >
                      {expandedSections[item.label] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </button>
                  )}
                </div>
              </SidebarMenuItem>
              {item.subItems && expandedSections[item.label] && (
                <ul className="pl-6_5 py-1 space-y-1 list-none ml-4 border-l border-sidebar-border">
                  {item.subItems.map(subItem => (
                    <li key={subItem.label}>
                      <Link href={`${item.href}${subItem.href}`} passHref>
                        <SidebarMenuButton
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-xs text-sidebar-foreground/80 hover:text-primary"
                          tooltip={{
                            children: subItem.label,
                            className: "bg-primary text-primary-foreground",
                          }}
                          onClick={handleSubItemClick}
                        >
                          <span>{subItem.label}</span>
                        </SidebarMenuButton>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 mt-auto">
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

